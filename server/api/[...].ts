import { stringify } from 'querystring';
import axios, { AxiosResponse } from 'axios';
import { createRouter, defineEventHandler } from 'h3';
import { Listing } from '~~/interfaces/listing';

const router = createRouter();

async function login () {
  const userData = {
    access_token: '',
    expires: new Date()
  };
  const data = {
    grant_type: 'password',
    client_id: 'david_strickland',
    client_secret: '8263f45014d643bfab92e89ba0c1f3fb',
    username: 'davidstrick',
    password: 'LBBapids'
  };
  let result: AxiosResponse<any, any>;
  try {
    result = await axios.post('https://retsidentityapi.raprets.com/LUBB/oauth/token',
      stringify(data),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );
    userData.access_token = result.data.access_token;
    userData.expires = result.data['.expires'];
  } catch (error) {
    // email error or something for logging
    console.error(error);
  }
  return userData;
}

function post (url: string, token: string) {
  return axios.get(url,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
}

router.post('/residential', defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = `https://retsapi.raprets.com/LUBB/RESO/OData/Property?%24expand=PropertyPictures+&%24top=${body.count}+&%24skip=${body.skip}\
  &Class=Residential\
  &$filter=MlsStatus%20eq%20%27Active%27 ${body.realtorID ? '%20and%20ListAgentMlsId%20eq%20%27812022600%27' : ''}`;
  let result = await post(url, event.context.auth.token);
  if (result.data.error) {
    if (result.data.error === 'invalid_grant') {
      const loginResult = await login();
      result = await post(url, loginResult.access_token);
    } else {
      // email log eventually
      console.error(result.data);
    }
  }
  return {
    data: result.data.value as Listing[] ?? []
  };
}));

export default useBase('/api', router.handler);

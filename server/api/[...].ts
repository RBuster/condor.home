import { stringify } from 'querystring';
import axios, { AxiosResponse } from 'axios';
import { createRouter, defineEventHandler } from 'h3';
import * as dotenv from 'dotenv';
import { EmailClient, EmailMessage } from '@azure/communication-email';
import { Listing } from '~~/interfaces/listing';
dotenv.config();

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

router.post('/featuredRentals', defineEventHandler(async (event) => {
  const url = 'https://retsapi.raprets.com/LUBB/RESO/OData/Property?$filter=MlsStatus%20eq%20%27Active%27%20and%20ListOfficeMlsId%20eq%20%271328%27&Class=ResidentialLease&$expand=PropertyPictures';
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

router.post('/sendEmail', defineEventHandler(async (event) => {
  const body = await readBody(event);
  const connString = process.env.AZURE_CONNECTION_STRING;
  if (!connString) {
    return 'invalid configuration';
  }
  const compiled = `Contact us form submitted by ${body.data.fullName}, please contact by phone ${body.data.phone} or email ${body.data.email}! Additional message follows...<br><br> ${body.data.message}`;
  const emailClient = new EmailClient(connString);
  const emailMessage: EmailMessage = {
    sender: 'donotreply@condor.homes',
    content: {
      subject: 'Contact Us Form Submission',
      html: compiled
    },
    recipients: {
      to: [
        {
          email: 'liairvin@condor.homes',
          displayName: 'Lia Irvin'
        }
      ]
    }
  };

  const response = await emailClient.send(emailMessage);
  return !!response;
}));

export default useBase('/api', router.handler);

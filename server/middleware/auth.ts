import { stringify } from 'node:querystring';
import axios, { AxiosResponse } from 'axios';
const userData = {
  access_token: '',
  expires: new Date()
};
export default defineEventHandler(async (event) => {
  if (userData.expires <= new Date()) {
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
  }
  event.context.auth = { token: userData.access_token };
});

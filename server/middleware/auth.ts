import { stringify } from 'node:querystring'
import axios from 'axios'
const userData = {
  current: false,
  access_token: ''
}
export default defineEventHandler(async (event) => {
  if (!userData.current) {
    const data = {
      grant_type: 'password',
      client_id: 'david_strickland',
      client_secret: '8263f45014d643bfab92e89ba0c1f3fb',
      username: 'davidstrick',
      password: 'LBBapids'
    }
    const result = await axios.post('https://retsidentityapi.raprets.com/LUBB/oauth/token',
      stringify(data),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    )
    userData.current = true
    userData.access_token = result.data.access_token
  }
  event.context.auth = { token: userData.access_token }
})

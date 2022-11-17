import axios from 'axios'
import { stringify } from 'node:querystring'

export default defineEventHandler(async (event) => {
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
    event.context.auth = { token: result.data.access_token }
  })

import axios from 'axios'

import { stringify } from 'qs'

const bodyParser = require('body-parser')
const app = require('express')()
let userData: any = {}

app.use(bodyParser.json())

app.use('*', async (res: any, req: any, next: any) => {
  if (userData && userData['.expires']) {
    // trying to not have to log in for every request to getListings
    const expires = new Date(userData['.expires'])
    if (new Date() <= expires) {
      next()
      return
    }
  }
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
  userData = result.data
  next()
})

app.all('/getListings', async (req: any, res: any) => {
  const result = await axios.get('https://retsapi.raprets.com/LUBB/RESO/OData/Property?%24expand=PropertyPictures+&%24filter=ListAgentMlsId+eq+%27812022600%27&Class=CommercialSale',
    {
      headers: { Authorization: `Bearer ${userData.access_token}` }
    }
  )
  res.json({ listings: result.data.value ?? [] })
})

module.exports = app

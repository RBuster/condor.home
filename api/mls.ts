const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

app.all('/getListings', (req: any, res: any) => {
  res.json({ data: 'data' })
})

module.exports = app

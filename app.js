const express = require('express')
const app = express()
const port = 3000
const { version } = require('./package.json') 

app.get('/version', (req, res) => {
  res.json({ version: version })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
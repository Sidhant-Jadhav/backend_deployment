require('dotenv').config()
const express = require('express')
const app = express()
const port =process.env.PORT||3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/game', (req, res) => {
  res.send('<h1>This is game heading<h1>')
})

app.get('/login', (req, res) => {
  res.send('This is login request')
})

app.listen( port, () => {
  console.log(` Server running on port ${port}`)
})
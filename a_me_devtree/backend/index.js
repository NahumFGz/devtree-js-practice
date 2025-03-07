const express = require('express')

const app = express()

//Routing
app.get('/', (req, res) => {
  res.send('Hola Mundo en express')
})

app.get('/ecommerce', (req, res) => {
  res.send('Este es el ecommerce')
})

app.listen(4000, () => {
  console.log('Servidor funcionando')
})

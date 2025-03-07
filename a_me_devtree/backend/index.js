import express from 'express'

const app = express()

//Routing
app.get('/', (req, res) => {
  res.send('Hola Mundo en express')
})

app.get('/ecommerce', (req, res) => {
  res.send('Este es el ecommerce')
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Servidor funcionando en el puerto: ', port)
})

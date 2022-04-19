const express = require('express')
const app = express()

app.listen(3000, function () {
  console.log('Server is running')
})

/*
  Verbos HTTP
  GET: Recebe dados de um Resource.
  POST: Enviar dados ou informações para serem      processados por um Resource.
  PUT: Atualiza dados de um Resource.
  DELETE: Deleta um Resource
*/

app.get('/clients', function (req, res) {
  // Antigamente se utilizava XML
  // hoje se utiliza Json
})

app.get('/clients', function (req, res) {})
app.post('/clients', function (req, res) {})
app.put('/clients', function (req, res) {})
app.delete('/clients', function (req, res) {})

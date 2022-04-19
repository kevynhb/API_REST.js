const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.json()) //falando para o express usar Json

app.get('/clients', function (req, res) {
  // Antigamente se utilizava XML
  // hoje se utiliza Json
  res.json(data)
})

app.get('/clients/:id', function (req, res) {
  const { id } = req.params
  const client = data.find(cli => cli.id == id)

  if (!client) return res.status(204).json()

  res.json(client)
})

app.post('/clients', function (req, res) {
  const { name, email } = req.body

  // salvar
  res.json({ name, email })
})

app.put('/clients/:id', function (req, res) {
  const { id } = req.params
  const client = data.find(cli => cli.id == id)

  if (!client) return res.status(204).json()

  const { name } = req.body

  client.name = name // name é igual ao novo name que foi pego do body

  res.json(client) //responde o cliente atualizado
})

app.delete('/clients/:id', function (req, res) {
  const { id } = req.params
  const clientsFiltered = data.filter(client => client.id != id)

  res.json(clientsFiltered)
})

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

/*
  STATUS DAS RESPOSTAS
  1xx - Informação
  2xx - Sucesso
    200: ok 
    201: CREATED
    204: Não tem conteúdo PUT POST DELETE
  3xx - Redirection
  4xx - Client Error
    400: Bad Requeset
    404: Not Found
  5xx - Server Error
    500: Internal Server Error
*/

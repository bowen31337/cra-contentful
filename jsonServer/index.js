const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const data = require('./data.json')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.post('/content/:version/:spaces/:vyvd54sdd5jment', (req, res) => {
  res.json(data.content);
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  // Continue to JSON Server router
  next()
})

// Use default router
server.listen(8000, () => {
  console.log('JSON Server is running')
})
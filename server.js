const app = require('express')()
const server = require('http').createServer()
// const server = require('http').createServer(app)
var port = process.argv[2] || process.env.PORT || 8080;
server.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`)
})
const options = {
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-header"],
    credentials: true
  }
}
const io = require('socket.io')(server, options)
io.use(function (socket, next) {
  const auth = socket.handshake.auth
  if (!auth.token) { // check token
    return next(new Error("not authorized"));
  }
  return next()
})
io.of('/auth').on('connection', (socket) => {
  console.log(`Auth client with ID of ${socket.id} connected!`)
})
io.of('/app').on('connection', (socket) => {
  // socket.emit('SOME_EVENT', socket.id)
  // socket.on('haha', (data) => {
  //   socket.emit('SOME_EVENT', data)
  // })
  console.log(`App client with ID of ${socket.id} connected!`)
})
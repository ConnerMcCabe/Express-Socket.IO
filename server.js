const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  socket.on('send-chat-message', message => {
    console.log(message)
    socket.broadcast.emit
  })
})

http.listen(5000, function() {
  console.log('Listening on port 5000');
})
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('new User')
  socket.emit('chat-message', "holla");
})

http.listen(5000, function() {
  console.log('Listening on port 5000');
})
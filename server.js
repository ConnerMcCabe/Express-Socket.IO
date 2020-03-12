const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

users = [];
connections = [];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  //connections
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  //disconnect
  socket.on('disconnect', function(data) {
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length)

  //send messages
  socket.on('send message', function(data){
    console.log(data)
    io.sockets.emit('new message', {msg: data});
  })
  })
})


http.listen(3000, function() {
  console.log('Listening on port 3000');
})
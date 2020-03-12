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
  connections.splice(connections.indexOf(socket), 1);
  console.log('Disconnected: %s sockets connected', connections.length)
})


http.listen(3000, function() {
  console.log('Listening on port 3000');
})
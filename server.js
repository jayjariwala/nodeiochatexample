var express=require('express');
var app = express();
var http= require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
res.sendFile(__dirname + '/index.html');

})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

var port = Number(process.env.PORT || 8083);
http.listen(port);

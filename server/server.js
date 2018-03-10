// https://still-shore-14825.herokuapp.com/
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var publicPath = path.join(__dirname, '/../public');
var port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New client is connected');

  socket.on('disconnect', () => {
    console.log('Client is disconnected');
  })
});
app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`App is running on port:${port}`);
});

const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();

const server = http.createServer(app);
const io = socketio(server);


const routes = require('./routes/index');


io.on('connetion' , (socket) => {
  console.log('we have a new connection');

  socket.on('disconnect', () => {
    console.log('user had left');
  })
})

app.use(routes);


app.listen(9000, () => {
  console.log('Server started on port 9000');
});


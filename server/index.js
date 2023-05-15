const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

const server = http.Server(app);


const io = require("socket.io")(server, { cors: { origin: "*" } });


const routes = require('./routes/index');

//middlewares
app.use(routes);
app.use(cors())



io.on('connection', (socket) => {

  console.log('we have a new connection');

  socket.on('connect',()=> console.log('socket connection mila hai bhaiya'))


  socket.on('message',(data)=> {
    console.log('backend fired');
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('user had left');
  })
})



server.listen(9000, () => {
  console.log('Server started on port 9000');
});


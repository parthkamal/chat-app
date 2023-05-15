//imports
const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.Server(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

//helper functions
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js')


const routes = require('./routes/index');

//middlewares
app.use(routes);
app.use(cors())



io.on('connection', (socket) => {

  console.log('we have a new connection');

  socket.on('connect',()=> console.log('socket connection mila hai bhaiya'))


  //functionality when a user has joined
  socket.on('join', ({name, room} ,callback)=>{
    const {error, user} = addUser({id: socket.id ,name, room});

    if(error) return callback(error);

    socket.emit('message', {user: 'admin', text: `${user.name} welcome to the room ${user.room}`});
    socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has joined`});

    socket.join(user.room);

  })

  socket.on('sendMessage', (message, callback)=> {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', {user: user.name, text: message});
  })

  socket.on('disconnect', () => {
    console.log('user had left');
  })
})



server.listen(9000, () => {
  console.log('Server started on port 9000');
});


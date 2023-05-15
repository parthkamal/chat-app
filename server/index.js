//imports
const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.Server(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

//helper functions
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');
const routes = require('./routes/index');

//middlewares
app.use(routes);
app.use(cors())



io.on('connection', (socket) => {


  //functionality when a user has joined
  socket.on('join', ({ name, room } ) => {

    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return {error};


    socket.emit('message', { user: 'admin', text: `${user.name} welcome to the room ${user.room}` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined` });

    socket.join(user.room);
  })

  socket.on('sendMessage', (message) => {
    console.log('we have received the send message', message);
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
    }
  })
})



server.listen(9000, () => {
  console.log('Server started on port 9000');
});


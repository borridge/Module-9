const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

app.use(express.static('public'));

let users = {};

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('setNickname', (nickname) => {
    users[socket.id] = nickname;
    socket.broadcast.emit('user-connected', nickname);
    io.emit('update-users', Object.values(users));
  });

  socket.on('chat-message', (msg) => {
    socket.broadcast.emit('chat-message', {
      message: msg.message,
      nickname: users[socket.id]
    });
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing', users[socket.id]);
  });

  socket.on('disconnect', () => {
    const nickname = users[socket.id];
    delete users[socket.id];
    socket.broadcast.emit('user-disconnected', nickname);
    io.emit('update-users', Object.values(users));
  });
});

http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
import { SocketEvent } from 'socket.io-manager';
const { User } = rootRequire('./models');

let socket = new SocketEvent();

socket
.name('signup')
.handler(socket => data => {
  let user = new User(data);

  user.save().then(() => {
    socket.emit('signup', true);
  }).catch(() => {
    socket.emit('signup', false);
  });
});

export default socket;

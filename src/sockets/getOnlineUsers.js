import { SocketEvent } from 'socket.io-manager';

const { User } = rootRequire('./models');
const middles = rootRequire('./middles');

let socket = new SocketEvent();

socket
.name('getOnlineUsers')
.middleware(
  middles.logged
)
.handler(socket => () => {
  User.find(
    { status: true },
    { nickname: true, username: true }
  ).then(users => {
    socket.emit('getOnlineUsers', users);
  });
});

export default socket;

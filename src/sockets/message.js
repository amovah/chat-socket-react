import { SocketEvent } from 'socket.io-manager';

const middles = rootRequire('./middles');

let socket = new SocketEvent();

socket
.name('message')
.middleware(
  middles.logged
)
.handler((socket, nsp) => text => {
  nsp.to(shared.key).emit('message', {
    text,
    nickname: socket.data.user.nickname
  });
});

export default socket;

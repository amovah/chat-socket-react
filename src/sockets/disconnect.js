import { SocketEvent } from 'socket.io-manager';

const middlewares = rootRequire('./middles');

let socket = new SocketEvent();

socket
.name('disconnect')
.middleware(
  middlewares.logged
)
.handler(socket => () => {
  socket.data.user.status = false;

  socket.data.user.save();
});

export default socket;

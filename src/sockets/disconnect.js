import { SocketEvent } from 'socket.io-manager';

const middlewares = rootRequire('./middles');

let socket = new SocketEvent();

socket
.name('disconnect')
.middleware(
  middlewares.logged
)
.handler((socket, nsp) => () => {
  socket.data.user.status = false;

  socket.data.user.save().then(() => {
    nsp.to(shared.key).emit('goesOffline', socket.data.user.username);
  });

});

export default socket;

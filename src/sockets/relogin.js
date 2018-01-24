import { SocketEvent } from 'socket.io-manager';
import { verify } from 'jsonwebtoken';

const { User } = rootRequire('./models');

let socket = new SocketEvent();

socket
.name('relogin')
.handler(socket => token => {
  verify(token, shared.key, (err, decoded) => {
    if (err) {
      socket.emit('relogin', false);
    } else {
      User.findById(decoded.user).then(user => {
        if (user) {
          socket.data.user = user;

          socket.emit('relogin', true);
        } else {
          socket.emit('relogin', false);
        }
      });
    }
  });
});

export default socket;

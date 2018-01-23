import { SocketEvent } from 'socket.io-manager';
import { sign } from 'jsonwebtoken';

const { User } = rootRequire('./models');

let socket = new SocketEvent();

socket
.name('login')
.handler(socket => data => {
  User.findOne(data).then(user => {
    if (user) {
      socket.emit(
        'login',
        sign({ user: user._id }, shared.key, { expiresIn: '1day' })
      );
    } else {
      socket.emit('login', false);
    }
  });
});

export default socket;

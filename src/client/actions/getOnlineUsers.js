import { GOES_ONLINE } from './index';

export default () => dispatch => {
  shared.socket.once('getOnlineUsers', users => {
    for (let user of users) {
      dispatch({ type: GOES_ONLINE, user });
    }
  });

  shared.socket.emit('getOnlineUsers');
};

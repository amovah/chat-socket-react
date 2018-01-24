import { LOGIN } from './index';

export default () => dispatch => {
  if (localStorage.token) {
    shared.socket.once('relogin', res => {
      if (res) {
        dispatch({ type: LOGIN, token: localStorage.token });
      }
    });

    shared.socket.emit('relogin', localStorage.token);
  }
};

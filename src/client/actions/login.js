import { LOGIN } from './index';

export default token => dispatch => {
  localStorage.token = token;

  dispatch({ type: LOGIN, token });
};

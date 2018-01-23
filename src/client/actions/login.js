import { LOGIN } from './index';

export function login(token) {
  return dispatch => {
    localStorage.token = token;

    dispatch({ type: LOGIN, token });
  };
}

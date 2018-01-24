import { LOGIN } from './index';

export default () => dispatch =>
  dispatch({ type: LOGIN, token: localStorage.token || '' });

import { combineReducers } from 'redux';
import user from './user';
import onlineUsers from './onlineUsers';

export default combineReducers({
  user,
  onlineUsers
});

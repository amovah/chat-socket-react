import { combineReducers } from 'redux';
import user from './user';
import onlineUsers from './onlineUsers';
import messages from './messages';

export default combineReducers({
  user,
  onlineUsers,
  messages
});

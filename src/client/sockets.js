import types from './actions';

const { socket, store } = shared;

socket.on('goesOffline', username => {
  store.dispatch({ type: types.GOES_OFFLINE, username });
});

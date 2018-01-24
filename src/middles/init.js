export default (next, socket) => () => {
  if (socket.data) {
    next();
  } else {
    socket.data = {};

    next();
  }
};

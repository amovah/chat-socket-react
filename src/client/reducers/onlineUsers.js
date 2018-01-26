import types from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.GOES_ONLINE: {
      return [...state, action.user];
    }

    case types.GOES_OFFLINE: {
      let index = state.findIndex(user => user.username === action.username);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    default: {
      return state;
    }
  }
};

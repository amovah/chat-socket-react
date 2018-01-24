import types from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_ONLINE: {
      return [...state, action.user];
    }

    default: {
      return state;
    }
  }
};

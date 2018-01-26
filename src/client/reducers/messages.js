import types from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.MESSAGE: {
      return [...state, action.message];
    }

    default: {
      return state;
    }
  }
};

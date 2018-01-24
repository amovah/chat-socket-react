import types from '../actions';

export default (state = { token: '', logged: false }, action) => {
  switch (action.type) {
    case types.LOGIN: {
      return {
        token: action.token,
        logged: true
      };
    }

    case types.LOGOUT: {
      return {
        token: '',
        logged: false
      };
    }

    default: {
      return state;
    }
  }
};

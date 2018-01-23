import * as types from '../actions';

export default function(state = '', action) {
  switch (action.type) {
    case types.LOGIN: {
      return action.token;
    }

    case types.LOGOUT: {
      return '';
    }

    default: {
      return state;
    }
  }
}

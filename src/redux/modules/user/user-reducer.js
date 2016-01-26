import debug from 'debug';
import {
  getUser,
  SET_USER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CLEAR_USER,
} from './user-actions';

if (__DEBUG__) {
  debug.enable('user-reducer:*');
}

const log = debug('user-reducer:debug');

const userReducer = (state = getUser(), action) => {
  let newState;

  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, action.user);
      break;
    case UPDATE_USER_REQUEST:
      newState = Object.assign({}, action.user);
      break;
    case UPDATE_USER_SUCCESS:
      newState = Object.assign({}, action.user);
      break;
    case UPDATE_USER_FAILURE:
      // NOTE: this is not essential, but it's useful to explicitly define
      newState = state;
      break;
    case CLEAR_USER:
      newState = null;
      break;
    default:
      newState = state;
  }

  log('action:', action, 'state:', state, 'newState:', newState);

  return newState;
};

export default userReducer;

import { post } from '../api';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

function addingUser(user) {
  return {
    type: REGISTER_REQUEST,
    isAdding: false,
    isDone: false,
    message: null,
  }
}

function addUserError(message) {
  return {
    type: REGISTER_ERROR,
    isAdding: false,
    isDone: false,
    message,
  }
}

function receiveAddUser(user) {
  return {
    type: REGISTER_SUCCESS,
    isAdding: false,
    isDone: true,
    user,
    message: null,
  }
}

export const addUser = (username, password, name) => {
  return async (dispatch) => {
    dispatch(addingUser());

    let user;
    try {
      user = await post('register', { username, password, name });
    } catch (e) {
      return dispatch(addUserError(e))
    }

    if (user.status >= 400) {
      return dispatch(addUserError(user.result.errors))

    }
    dispatch(receiveAddUser(user.result))
  }
}

import { post } from '../api';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

function addingUser(user) {
  return {
    type: REGISTER_REQUEST,
    isAdding: false,
    isDone: false,
    errors: null,
  }
}

function addUserError(errors) {
  return {
    type: REGISTER_ERROR,
    isAdding: false,
    isDone: false,
    errors,
  }
}

function receiveAddUser(user) {
  return {
    type: REGISTER_SUCCESS,
    isAdding: false,
    isDone: true,
    user,
    errors: null,
  }
}

export const addUser = (username, password, name) => {
  return async (dispatch) => {
    dispatch(addingUser());

    let user;
    try {
      user = await post('register', { username, password, name });
    } catch (e) {
      return dispatch(addUserError([{ errors: e }]))
    }

    if (user.status === 400) {
      let array = Array.from(user.result.errors);
      console.log(user.result);
      //console.log(user.result.errors.message)
      return dispatch(addUserError(user.result))

    }
    dispatch(receiveAddUser(user.result))
  }
}

import { post } from '../api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'REGISTER_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function requestLogin(user) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    errors: null,
  }
}

function loginError(errors) {
  return {
    type: LOGIN_ERROR,
    isFetching: false,
    isAuthenticated: false,
    errors,
  }
}

function recieveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user,
    errors: null,
  }
}

export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch(requestLogin());

    let login;
    try {
      login = await post('login', { username, password });
    } catch (e) {
      return dispatch(loginError([{ errors: e }]))
    }

    if (!login.loggedIn) {
      dispatch(loginError(login.error))
    }

    if (login.status === 200) {
      const { user, token } = login.result;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      dispatch(recieveLogin(user));
    }
  }
}

import { get } from '../api';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_ERROR = 'USERS_ERROR';
export const USERS_SUCCESS = 'USERS_SUCCESS';

function requestUsers() {
  return {
    type: USERS_REQUEST,
    isFetching: true,
    error: null,
  }
}

function usersError(error) {
  return {
    type: USERS_ERROR,
    isFetching: true,
    users: [],
    error: error,
  }
}

function receiveUsers(users) {
  return {
    type: USERS_SUCCESS,
    isFetching: false,
    users,
    error: null,
  }
}
export const getUsers = (endpoint) => {
  return async (dispatch) => {
    dispatch(requestUsers());
    let users;
    try {
      users = await get('users');
    } catch (e) {
      return dispatch(usersError(e))
    }

    if (users.status >= 400) {
      return dispatch(usersError(users.result.error))
    }
    console.log(users.result.items)
    dispatch(receiveUsers(users.result.items));
  }
}

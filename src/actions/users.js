import { get } from '../api';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_ERROR = 'USER_ERROR';
export const USER_SUCCESS = 'USER_SUCCESS';

function requestUsers() {
  return {
    type: USER_REQUEST,
    isFetching: true,
    error: null,
  }
}

function usersError(error) {
  return {
    type: USER_ERROR,
    isFetching: true,
    users: [],
    error: error,
  }
}

function receiveUsers(users) {
  return {
    type: USER_SUCCESS,
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
      users = await get(endpoint);
    } catch (e) {
      return dispatch(usersError(e))
    }

    if (users.status >= 400) {
      return dispatch(userErrors(users.result.error))
    }
    dispatch(receiveUsers(users.result));
  }
}

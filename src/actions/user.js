import { get, post } from '../api';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_ERROR = 'USER_ERROR';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_PHOTO_REQUEST = 'USER_PHOTO_REQUEST';
export const USER_PHOTO_ERROR = 'USER_PHOTO_ERROR';
export const USER_PHOTO_SUCCESS = 'USER_PHOTO_REQUEST';


function requestUser() {
  return {
    type: USER_REQUEST,
    isFetching: true,
    error: null,
  }
}

function userError(error) {
  return {
    type: USER_ERROR,
    isFetching: true,
    users: [],
    error: error,
  }
}

function receiveUser(user) {
  return {
    type: USER_SUCCESS,
    isFetching: false,
    user,
    error: null,
  }
}

function requestUserPhoto() {
  return {
    type: USER_PHOTO_REQUEST,
    isFetching: true,
    error: null,
  }
}

export const getUser = (endpoint) => {
  return async (dispatch) => {
    dispatch(requestUser());
    let users;
    try {
      users = await get(endpoint);
    } catch (e) {
      return dispatch(userError(e))
    }

    if (users.status >= 400) {
      return dispatch(userError(users.result.error))
    }
    dispatch(receiveUser(users.result));
  }
}

export const addUserPhoto = (photo) => {
  return async (dispatch) => {
    dispatch(requestUserPhoto());
    try {
      await post('users/me/profile', photo);
    } catch (e) {
      return dispatch(userError(e))
    }
    dispatch(receiveUser(photo.result));
  }
}

import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT,
} from '../actions/auth';

const user = JSON.parse(localStorage.getItem('user') || 'null');

const initialState = {
  isFetching: false,
  isAuthenticated: user ? true : false,
  user,
};

export default (state = initialState, action) => {
  switch (action.type) {

    /* todo setja upp reducer */
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.user,
        errors: action.errors,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errors: action.errors,
      }

      case LOGIN_LOGOUT:
        return {
          ...state,
          isFetching: action.isFetching,
          isAuthenticated: action.isAuthenticated,
          user: action.user,
      }
    default:
      return state;
  }
};

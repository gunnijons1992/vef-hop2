import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user';

const initialState = {
    isFetching: false,
    user: [],
    error: null,
    photo: null,
    errors: [],
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case USER_REQUEST:
        return {
          ...state,
          isFetching: action.isFetching,
        };

      case USER_ERROR:
        return {
          ...state,
          isFetching: action.isFetching,
          user: action.user,
          error: action.error,
        };

      case USER_SUCCESS:
        return {
          ...state,
          isFetching: action.isFetching,
          user: action.user,
          error: action.error,
        };

        case USER_PHOTO_REQUEST:
          return {
            ...state,
            isAdding: action.isAdding,
            errors: [],
          };

        case USER_PHOTO_ERROR:
          return {
            ...state,
            isAdding: action.isAdding,
            errors: action.errors,
          };

        case USER_PHOTO_SUCCESS:
          return {
            ...state,
            isFetching: action.isFetching,
            photo: action.photo,
            error: action.error,
          };
          
    default:
        return state;
  }
};

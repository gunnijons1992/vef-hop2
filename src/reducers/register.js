import { REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS } from '../actions/register';

const initialState = {
  isAdding: false,
  user: [],
  error: null,
  errors: [],
  message:[],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REGISTER_REQUEST:
      return {
        ...state,
        isAdding: action.isAdding,
        errors: [],
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isAdding: action.isAdding,
        errors: action.errors,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAdding: action.isAdding,
      //  user: [...state.user, action.user],
        user: action.user,
        error: action.error,
      };

    default:
      return state;
  }
};

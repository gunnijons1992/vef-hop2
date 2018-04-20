import { REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS } from '../actions/register';

const initialState = {
  isAdding: false,
  user: [],
  error: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REGISTER_REQUEST:
      return {
        ...state,
        isAdding: action.isAdding,
        isDone: action.isDone,
        errors: [],
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isAdding: action.isAdding,
        isDone: action.isDone,
        errors: action.errors,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAdding: action.isAdding,
        isDone: action.isDone,
      //  user: [...state.user, action.user],
        user: action.user,
        errors: action.errors,
      };

    default:
      return state;
  }
};

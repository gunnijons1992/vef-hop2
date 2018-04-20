import { REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS } from '../actions/register';

const initialState = {
  isAdding: false,
  user: [],
  isDone: false,
  errors: [],
  message: null,
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
        message: action.message,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAdding: action.isAdding,
        isDone: action.isDone,
        message: action.message,
      };

    default:
      return state;
  }
};

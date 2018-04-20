import { BOOK_REQUEST, BOOK_ERROR, BOOK_SUCCESS} from '../actions/book';

const initialState = {
  isFetching: false,
  book:[],
  error: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isDone: action.isDone,
      };

    case BOOK_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isDone: action.isDone,
        book: action.book,
        errors: action.errors,
      };

    case BOOK_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isDone: action.isDone,
        book: action.book,
        errors: action.errors,
      };


    default:
      return state;
  }
};

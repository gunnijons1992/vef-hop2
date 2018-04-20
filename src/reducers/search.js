import { SEARCH_REQUEST, SEARCH_ERROR, SEARCH_SUCCESS } from '../actions/search';

const initialState = {
  isFetching: false,
  bookSearch: [],
  error: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        bookSearch: action.bookSearch,
        error: action.error,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        bookSearch: action.bookSearch,
        error: action.error,
      };

    default:
      return state;
  }
};

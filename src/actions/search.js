import { get } from '../api';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

function requestSearchBooks(){
  return (
    type: SEARCH_REQUEST,
    isFetching: true,
    error: null,
  )
}

function requestSearchBooksErrors(){
  return (
    type: SEARCH_REQUEST,
    isFetching: false,
    bookSearch: [],
    error: error,
  )
}

function recieveSearchBooks(){
  return (
    type: SEARCH_REQUEST,
    isFetching: false,
    bookSearch,
    error: null,
  )
}

export const search = (endpoint) => {
  return async (dispatch) => {
  dispatch(requestSearchBooks());
  let bookSearch;
  try {
    bookSearch = await get(endpoint);
  } catch (e) {
    return dispatch(requestSearchBooksErrors(e))
  }

  dispatch(receiveSearchBooks(bookSearch.result.items));
}
}

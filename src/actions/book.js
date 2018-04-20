import { get } from '../api';

export const BOOK_REQUEST = 'BOOK_REQUEST';
export const BOOK_ERROR = 'BOOK_ERROR';
export const BOOK_SUCCESS = 'BOOK_SUCCESS';


function requestBook() {
  return {
    type: BOOK_REQUEST,
    isFetching: true,
    isDone: false,
    error: null,
  }
}

function bookError(error) {
  return {
    type: BOOK_ERROR,
    isFetching: false,
    isDone: false,
    book: [],
    error: error,
  }
}

function receiveBook(book) {
  return {
    type: BOOK_SUCCESS,
    isFetching: false,
    isDone: true,
    book,
    error: null,
  }
}

export const fetchBook = (id) => {
  return async (dispatch) => {
    dispatch(requestBook());
    console.log("hee");

    let book;
    try {
      book = await get('books/'+ id);
    } catch (e) {
      return dispatch(bookError(e))
    }
    //console.log(book.result);
    dispatch(receiveBook(book.result));
  }
}

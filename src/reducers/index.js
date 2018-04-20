import { combineReducers } from 'redux'
import auth from './auth'
import books from './books'
import book from './book'
import register from './register'

export default combineReducers({
  auth, books, book, register
})

import { combineReducers } from 'redux'
import auth from './auth'
import books from './books'
import book from './book'
import register from './register'
import users from './users'

export default combineReducers({
  auth, books, book, register, users
})

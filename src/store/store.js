import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import api from './middleware/api'
import reducer from './rootReducers'

//export function that returns the store
console.log(reducer)

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  })
}

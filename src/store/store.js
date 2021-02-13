import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import api from './middleware/api'
import reducer from './rootReducers'

//export function that returns the store

export default function store() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  })
}

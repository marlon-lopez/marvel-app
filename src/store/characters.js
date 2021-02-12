import { createSlice } from '@reduxjs/toolkit'

import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    favorite: [],
    loading: false,
  },
  reducers: {
    //actions => action handlers
    charactersRequested: (state, action) => {
      state.loading = true
    },
    charactersReceived: (state, action) => {
      //console.log(action.payload)
      state.loading = false
      state.list = action.payload
    },
    favoriteAdded: (state, action) => {
      state.favorite.push(action.payload)
    },
    favoriteRemoved: (state, action) => {
      state.favorite = state.favorite.filter((name) => name !== action.payload)
    },
  },
})

let i = 1
export const {
  charactersRequested,
  charactersReceived,
  favoriteAdded,
  favoriteRemoved,
} = slice.actions

export const loadCharacters = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/characters?apikey=${process.env.REACT_APP_API_KEY}&limit=18`,
      method: 'GET',
      onStart: charactersRequested.type,
      onSuccess: charactersReceived.type,
    }),
  )
}

export default slice.reducer

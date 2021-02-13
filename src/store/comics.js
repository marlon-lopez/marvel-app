import { createSlice } from '@reduxjs/toolkit'

import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'comics',
  initialState: {
    listComics: [],
    favoriteComics: [],
    loading: false,
  },
  reducers: {
    //actions => action handlers
    comicsRequested: (state, action) => {
      state.loading = true
    },
    comicsReceived: (state, action) => {
      state.loading = false
      state.listComics = action.payload
    },
    favComicAdded: (state, action) => {
      state.favoriteComics.push(action.payload)
    },
    favComicRemoved: (state, action) => {
      state.favoriteComics = state.favoriteComics.filter(
        (name) => name !== action.payload,
      )
    },
  },
})

export const {
  comicsReceived,
  comicsRequested,
  favComicAdded,
  favComicRemoved,
} = slice.actions

export const loadComics = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/comics?apikey=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
      onStart: comicsRequested.type,
      onSuccess: comicsReceived.type,
    }),
  )
}

export const getFavoriteComic = (state, id) => {
  return state.find((comic) => comic.id === id)
}

export default slice.reducer

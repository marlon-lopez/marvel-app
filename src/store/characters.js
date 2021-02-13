import { createSlice } from '@reduxjs/toolkit'

import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'characters',
  initialState: {
    listCharacters: [],
    favoriteCharacters: [],
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
      state.listCharacters = action.payload
    },
    favCharacterAdded: (state, action) => {
      state.favoriteCharacters.push(action.payload)
    },
    favCharacterRemoved: (state, action) => {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        (name) => name !== action.payload,
      )
    },
  },
})

export const {
  charactersRequested,
  charactersReceived,
  favCharacterAdded,
  favCharacterRemoved,
} = slice.actions

export const loadCharacters = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/characters?apikey=${process.env.REACT_APP_API_KEY}&limit=21`,
      method: 'GET',
      onStart: charactersRequested.type,
      onSuccess: charactersReceived.type,
    }),
  )
}

export const getFavoriteCharacters = (state, id) => {
  return state.find((character) => character.id === id)
}

export default slice.reducer

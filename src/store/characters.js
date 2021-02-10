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
  },
})

let i = 1
const { charactersRequested, charactersReceived } = slice.actions

export const loadCharacters = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: '/characters?apikey=791e220648b8039c0cc72c8493623e47',
      method: 'GET',
      onStart: charactersRequested.type,
      onSuccess: charactersReceived.type,
    }),
  )
}

export default slice.reducer

import { createSlice } from '@reduxjs/toolkit'

import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'comics',
  initialState: {
    listComics: [],
    favoriteComics: [],
    creators: [],
    characters: [],
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
    creatorsReceived: (state, action) => {
      state.creators.push(action.payload[0])
    },
    clearComicDetails: (state, action) => {
      state.creators = []
      state.characters = []
    },
    charactersReceived: (state, action) => {
      state.characters.push(action.payload[0])
    },
  },
})

export const {
  comicsReceived,
  comicsRequested,
  favComicAdded,
  favComicRemoved,
  creatorsReceived,
  clearComicDetails,
  charactersReceived,
} = slice.actions

export const loadComics = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `/comics?apikey=${process.env.REACT_APP_API_KEY}&limit=100`,
      method: 'GET',
      onStart: comicsRequested.type,
      onSuccess: comicsReceived.type,
    }),
  )
}

export const getCreators = (creators) => (dispatch, getState) => {
  if (!creators) return

  creators.forEach((creator) => {
    dispatch(
      apiCallBegan({
        url: `/creators/${creator.resourceURI.split('/')[6]}?apikey=${
          process.env.REACT_APP_API_KEY
        }`,
        method: 'GET',
        onSuccess: creatorsReceived.type,
      }),
    )
  })
}

export const getComicCharacters = (characters) => (dispatch, getState) => {
  characters.forEach((character) => {
    dispatch(
      apiCallBegan({
        url: `/characters/${character.resourceURI.split('/')[6]}?apikey=${
          process.env.REACT_APP_API_KEY
        }`,
        method: 'GET',
        onSuccess: charactersReceived.type,
      }),
    )
  })
}

export default slice.reducer

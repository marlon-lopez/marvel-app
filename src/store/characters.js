import { createSlice } from '@reduxjs/toolkit'

import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'characters',
  initialState: {
    listCharacters: [],
    favoriteCharacters: [],
    comics: [],
    series: [],
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
    comicsReceived: (state, action) => {
      state.comics.push(action.payload[0])
    },
    seriesReceived: (state, action) => {
      state.series.push(action.payload[0])
    },
    clearCharacterDetails: (state, action) => {
      state.comics = []
      state.series = []
    },
  },
})

export const {
  charactersRequested,
  charactersReceived,
  favCharacterAdded,
  favCharacterRemoved,
  comicsReceived,
  seriesReceived,
  clearCharacterDetails,
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
export const getCharactersComic = (comics) => (dispatch, getState) => {
  comics.forEach((comic) => {
    dispatch(
      apiCallBegan({
        url: `/comics/${comic.resourceURI.split('/')[6]}?apikey=${
          process.env.REACT_APP_API_KEY
        }`,
        method: 'GET',
        onSuccess: comicsReceived.type,
      }),
    )
  })
}

export const getSeries = (series) => (dispatch, getState) => {
  series.forEach((serie) => {
    dispatch(
      apiCallBegan({
        url: `/series/${serie.resourceURI.split('/')[6]}?apikey=${
          process.env.REACT_APP_API_KEY
        }`,
        method: 'GET',
        onSuccess: seriesReceived.type,
      }),
    )
  })
}

export default slice.reducer

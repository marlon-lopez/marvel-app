export const getFavorite = (state, id) => {
  return state.find((comic) => comic.id === id)
}

export const getDetails = (state, id) => {
  if (!state || !id) {
    console.log('Not found')
  }
  return state.find((item) => Number(item.id) === Number(id))
}

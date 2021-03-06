import axios from 'axios'
//actions
import * as actions from '../api'
const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  const { url, method, onStart, onSuccess, onError } = action.payload

  //check if is loading
  if (onStart) dispatch({ type: onStart })

  next(action)
  try {
    const response = await axios.request({
      baseURL: `https://gateway.marvel.com:443/v1/public`,
      url,
      method,
    })
    dispatch(actions.apiCallSuccess(response.data.data.results))

    if (onSuccess)
      dispatch({ type: onSuccess, payload: response.data.data.results })
  } catch (err) {
    dispatch(actions.apiCallFailed(err.message))

    if (onError) dispatch({ type: onError, payload: err.message })
  }
}

export default api

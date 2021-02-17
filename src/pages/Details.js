import React, { useEffect } from 'react'
import CardDetails from '../components/CardDetails/CardDetails'
import { getDetails } from '../utils'
import { useSelector, useDispatch } from 'react-redux'
import { getCreators, clearCreators, getComicCharacters } from '../store/comics'

const Details = ({ match }) => {
  const dispatch = useDispatch()
  const { listCharacters } = useSelector((state) => state.characters)
  const { listComics, characters, creators } = useSelector(
    (state) => state.comics,
  )
  const item = getDetails(
    match.path.includes('characters') ? listCharacters : listComics,
    match.params.id.toString(),
  )

  useEffect(() => {
    console.log(item)
    dispatch(getCreators(item.creators.items))
    dispatch(getComicCharacters(item.characters.items))
    return () => {
      dispatch(clearCreators())
    }
  }, [])

  return (
    <>
      {item ? (
        <>
          <CardDetails
            img={item.thumbnail.path + '.' + item.thumbnail.extension}
            name={item.name || item.title}
          />
        </>
      ) : (
        <p>no</p>
      )}
      {}
    </>
  )
}

export default Details

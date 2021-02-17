import React, { useEffect } from 'react'
import { Title, Cards } from '../GlobalStyles'
import { getDetails } from '../utils'
import { useSelector, useDispatch } from 'react-redux'
import {
  getCreators,
  clearComicDetails,
  getComicCharacters,
} from '../store/comics'
import {
  getCharactersComic,
  getSeries,
  clearCharacterDetails,
} from '../store/characters'
import CardDetails from '../components/CardDetails/CardDetails'
import CircleImg from '../components/CircleImg/CircleImg'

const Details = ({ match }) => {
  const dispatch = useDispatch()
  const { listCharacters, comics, series } = useSelector(
    (state) => state.characters,
  )
  const { listComics, characters, creators } = useSelector(
    (state) => state.comics,
  )
  //get the details obj, first evaluate if its a character or comic
  const item = getDetails(
    match.path.includes('characters') ? listCharacters : listComics,
    match.params.id.toString(),
  )

  useEffect(() => {
    if (match.path.includes('comics')) {
      dispatch(getCreators(item.creators.items))
      dispatch(getComicCharacters(item.characters.items))
    } else {
      dispatch(getCharactersComic(item.comics.items))
      dispatch(getSeries(item.series.items))
    }
    return () => {
      dispatch(clearComicDetails())
      dispatch(clearCharacterDetails())
    }
  }, [dispatch, match, item])

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
      {match.path.includes('comics') ? (
        <>
          <Title>Characters</Title>
          <Cards>
            {characters &&
              characters.map((character) => (
                <CircleImg
                  img={
                    character.thumbnail.path +
                    '.' +
                    character.thumbnail.extension
                  }
                  name={character.name}
                  key={character.id}
                />
              ))}
          </Cards>
          <Title>Creators</Title>
          <Cards>
            {creators &&
              creators.map((creator) => (
                <CircleImg
                  img={
                    creator.thumbnail.path + '.' + creator.thumbnail.extension
                  }
                  name={creator.fullName}
                  key={creator.id}
                />
              ))}
          </Cards>
        </>
      ) : (
        <>
          <Title>Comics</Title>
          <Cards>
            {comics &&
              comics.map((comic) => (
                <CircleImg
                  img={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                  name={comic.fullName}
                  key={comic.id}
                />
              ))}
          </Cards>

          <Title>Series</Title>
          <Cards>
            {series &&
              series.map((serie) => (
                <CircleImg
                  img={serie.thumbnail.path + '.' + serie.thumbnail.extension}
                  name={serie.fullName}
                  key={serie.id}
                />
              ))}
          </Cards>
        </>
      )}
    </>
  )
}

export default Details

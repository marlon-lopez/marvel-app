import React, { useEffect } from 'react'
import { Cards, Container, Title } from '../GlobalStyles'
import CardItem from '../components/CardItem/CardItem'

import { useSelector, useDispatch } from 'react-redux' // useSelector grabs state similar to mapStateToProps
import { loadCharacters } from '../store/characters'

const Characters = ({ match }) => {
  const dispatch = useDispatch()
  const { listCharacters, loading, favoriteCharacters } = useSelector(
    (state) => state.characters,
  )

  useEffect(() => {
    if (!listCharacters.length) dispatch(loadCharacters())
    return () => {}
  }, [dispatch, listCharacters.length])

  //get data back
  return (
    <Container>
      <Title>Characters</Title>
      {listCharacters.length && (
        <Cards>
          {listCharacters.map((character) => (
            <CardItem
              img={
                character.thumbnail.path + '.' + character.thumbnail.extension
              }
              name={character.name}
              key={character.id}
              id={character.id}
              favCharacters={favoriteCharacters}
              detailsPath={match.path}
            />
          ))}
        </Cards>
      )}
      {loading && <p>Loading.....</p>}
    </Container>
  )
}

export default Characters

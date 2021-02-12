import React, { useEffect } from 'react'
import { Cards, Container, Title } from '../GlobalStyles'
import CardItem from '../components/cardItem/CardItem'

import { useSelector, useDispatch } from 'react-redux' // useSelector grabs state similar to mapStateToProps
import { loadCharacters } from '../store/characters'

const Characters = () => {
  const dispatch = useDispatch()

  const { list, loading } = useSelector((state) => state.characters)
  useEffect(() => {
    if (!list.length) dispatch(loadCharacters())
    console.log('rendered')
    return () => {
      console.log('unmounted')
    }
  }, [])

  //get data back
  return (
    <Container>
      <Title>Characters</Title>
      {list.length && (
        <Cards>
          {list.map((character) => (
            <CardItem
              img={
                character.thumbnail.path + '.' + character.thumbnail.extension
              }
              name={character.name}
              key={character.id}
            />
          ))}
        </Cards>
      )}
      {loading && <p>Loading.....</p>}
    </Container>
  )
}

export default Characters

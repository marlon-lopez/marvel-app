import React from 'react'
import CardItem from '../components/CardItem/CardItem'
import { Cards, Container, Title } from '../GlobalStyles'

import { useSelector } from 'react-redux'
import { getFavorite } from '../utils'

const Favorite = () => {
  const { favoriteCharacters, listCharacters } = useSelector(
    (state) => state.characters,
  )
  const { favoriteComics, listComics } = useSelector((state) => state.comics)
  return (
    <Container>
      <Title>Favorite Characters</Title>
      <Cards>
        {favoriteCharacters.length ? (
          favoriteCharacters.map((id) => {
            let favCharacter = getFavorite(listCharacters, id)
            return (
              <CardItem
                img={
                  favCharacter.thumbnail.path +
                  '.' +
                  favCharacter.thumbnail.extension
                }
                name={favCharacter.name}
                id={id}
                key={id}
                favCharacters={favoriteCharacters}
              />
            )
          })
        ) : (
          <h3>You Have Not Added Favorite Characters Yet</h3>
        )}
      </Cards>
      <Title>Favorite Comics</Title>
      {
        <Cards>
          {favoriteComics.length ? (
            favoriteComics.map((id) => {
              let favComic = getFavorite(listComics, id)
              return (
                <CardItem
                  img={
                    favComic.thumbnail.path + '.' + favComic.thumbnail.extension
                  }
                  name={favComic.title}
                  key={id}
                  id={id}
                  favComics={favoriteComics}
                />
              )
            })
          ) : (
            <h3>You Have Not Added Favorite Comics Yet</h3>
          )}
        </Cards>
      }
    </Container>
  )
}

export default Favorite

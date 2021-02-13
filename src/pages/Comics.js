import React, { useEffect } from 'react'
import { Cards, Container, Title } from '../GlobalStyles'
import CardItem from '../components/cardItem/CardItem'

import { useSelector, useDispatch } from 'react-redux' // useSelector grabs state similar to mapStateToProps
import { loadComics } from '../store/comics'

const Comics = () => {
  const dispatch = useDispatch()
  const { listComics, favoriteComics, loading } = useSelector(
    (state) => state.comics,
  )

  useEffect(() => {
    if (!listComics.length) dispatch(loadComics())
    console.log('rendered')
    return () => {
      console.log('unmmounted')
    }
  }, [])
  return (
    <Container>
      <Title>Comics</Title>
      {listComics.length && (
        <Cards>
          {listComics.map((comic) => (
            <CardItem
              img={comic.thumbnail.path + '.' + comic.thumbnail.extension}
              name={comic.title}
              key={comic.id}
              id={comic.id}
              favComics={favoriteComics}
            />
          ))}
        </Cards>
      )}
      {loading && <p>Loading.....</p>}
    </Container>
  )
}

export default Comics

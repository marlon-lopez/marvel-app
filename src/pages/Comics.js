import React, { useEffect } from 'react'
import { Cards, Container, Title } from '../GlobalStyles'
import CardItem from '../components/CardItem/CardItem'

import { useSelector, useDispatch } from 'react-redux' // useSelector grabs state similar to mapStateToProps
import { loadComics } from '../store/comics'

const Comics = ({ match }) => {
  const dispatch = useDispatch()
  const { listComics, favoriteComics, loading } = useSelector(
    (state) => state.comics,
  )

  useEffect(() => {
    if (!listComics.length) dispatch(loadComics())
    return () => {}
  }, [dispatch, listComics.length])
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
              detailsPath={match.path}
            />
          ))}
        </Cards>
      )}
      {loading && <p>Loading.....</p>}
    </Container>
  )
}

export default Comics

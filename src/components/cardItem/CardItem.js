import React from 'react'
import { Img, ImgWrapper } from '../../GlobalStyles'
import { Card, CardName, CardActions, CardLink } from './styles'
import FavButton from '../FavButton/FavButton'
import { useDispatch } from 'react-redux'
import { favCharacterAdded, favCharacterRemoved } from '../../store/characters'
import { favComicRemoved, favComicAdded } from '../../store/comics'

const CardItem = ({ img, name, id, detailsPath, favCharacters, favComics }) => {
  const dispatch = useDispatch()

  const setFavAction = (id) => {
    if (favCharacters)
      return !favCharacters.includes(id)
        ? dispatch(favCharacterAdded(id))
        : dispatch(favCharacterRemoved(id))
    else
      return !favComics.includes(id)
        ? dispatch(favComicAdded(id))
        : dispatch(favComicRemoved(id))
  }

  return (
    <Card>
      <CardActions>
        <FavButton
          isFavorite={
            !favCharacters ? favComics.includes(id) : favCharacters.includes(id)
          }
          action={() => setFavAction(id)}
        />
      </CardActions>
      <CardLink to={detailsPath + '/' + id}>
        <ImgWrapper>
          <Img src={img} alt={name} />
        </ImgWrapper>
        <CardName>{name}</CardName>
      </CardLink>
    </Card>
  )
}

export default CardItem

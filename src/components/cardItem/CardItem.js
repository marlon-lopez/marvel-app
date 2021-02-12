import React from 'react'
import { Img, ImgWrapper } from '../../GlobalStyles'
import { Card, CardName, CardActions, CardLink } from './styles'
import FavButton from '../FavButton/FavButton'
import { useSelector, useDispatch } from 'react-redux'
import { favoriteAdded, favoriteRemoved } from '../../store/characters'

const CardItem = ({ img, name, detailsUrl }) => {
  const dispatch = useDispatch()
  const { favorite } = useSelector((state) => state.characters)
  return (
    <Card>
      <CardActions>
        <FavButton
          isFavorite={favorite.includes(name)}
          action={() =>
            !favorite.includes(name)
              ? dispatch(favoriteAdded(name))
              : dispatch(favoriteRemoved(name))
          }
        />
      </CardActions>
      <CardLink to='/1'>
        <ImgWrapper>
          <Img src={img} alt={name} />
        </ImgWrapper>
        <CardName>{name}</CardName>
      </CardLink>
    </Card>
  )
}

export default CardItem

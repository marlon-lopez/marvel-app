import React from 'react'
import { HeartBtn } from './styles'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavButton = ({ isFavorite, action }) => {
  return (
    <HeartBtn onClick={action} title='Add to Favortie'>
      {!isFavorite ? <AiOutlineHeart /> : <AiFillHeart />}
    </HeartBtn>
  )
}

export default FavButton

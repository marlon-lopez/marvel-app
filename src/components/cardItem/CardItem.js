import React from 'react'
import { Img, ImgWrapper } from '../../GlobalStyles'
import { Card, CardName } from './styles'
const CardItem = ({ img, name, detailsUrl }) => {
  return (
    <Card to={detailsUrl || {}}>
      <ImgWrapper>
        <Img src={img} />
      </ImgWrapper>
      <CardName>{name}</CardName>
    </Card>
  )
}

export default CardItem

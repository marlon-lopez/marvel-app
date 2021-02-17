import React from 'react'
import { Image, Name, Wrapper } from './styles'

const CircleImg = ({ img, name }) => {
  return (
    <Wrapper>
      <Image src={img} alt={name} />
      <Name>{name}</Name>
    </Wrapper>
  )
}

export default CircleImg

import React from 'react'
import { FlexContainer, Img, ImgWrapper, TextWrapper } from '../../GlobalStyles'
import { DetailsContainer, Name } from './styles'
const CardDetails = ({ img, name, description }) => {
  return (
    <DetailsContainer>
      <FlexContainer>
        <ImgWrapper>
          <Img src={img} />
        </ImgWrapper>
        <TextWrapper>
          <Name>{name}</Name>
        </TextWrapper>
      </FlexContainer>
    </DetailsContainer>
  )
}

export default CardDetails

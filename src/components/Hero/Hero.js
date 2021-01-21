import React from 'react'
//styles
import {
  HeroSection,
  HeroContainer,
  TextWrapper,
  Text,
  ImgWrapper,
  Img,
} from './styles'

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <TextWrapper>
          <Text>The Marvel</Text>
          <Text>Comics Guide</Text>
        </TextWrapper>
        <ImgWrapper>
          <Img src='img/Iron-man.png' />
        </ImgWrapper>
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero

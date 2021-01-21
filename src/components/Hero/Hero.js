import React from 'react'
//styles
import { TextWrapper, ImgWrapper, Img } from '../../GlobalStyles'
import { HeroSection, HeroContainer, Text } from './styles'

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

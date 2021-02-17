import React from 'react'
//styles
import { TextWrapper, FlexContainer, ImgWrapper, Img } from '../../GlobalStyles'
import { HeroSection, Text } from './styles'

const Hero = () => {
  return (
    <HeroSection>
      <FlexContainer>
        <TextWrapper>
          <Text>The Marvel</Text>
          <Text>Comics Guide</Text>
        </TextWrapper>
        <ImgWrapper>
          <Img src='img/Iron-man.png' />
        </ImgWrapper>
      </FlexContainer>
    </HeroSection>
  )
}

export default Hero

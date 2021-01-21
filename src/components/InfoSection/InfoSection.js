import React from 'react'
import { TextWrapper, Img } from '../../GlobalStyles'
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  Description,
  ImgContainer,
} from './styles'

const InfoSection = () => {
  return (
    <InfoSec>
      <InfoRow reverse={false}>
        <InfoColumn>
          <TextWrapper>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus laboriosam nihil aperiam ratione saepe sit alias rerum
              quaerat amet? Id maxime beatae facere illum sequi.
            </Description>
          </TextWrapper>
        </InfoColumn>
        <InfoColumn>
          <ImgContainer>
            <Img src='img/first-img.png' />
          </ImgContainer>
        </InfoColumn>
      </InfoRow>
      <InfoRow reverse={true}>
        <InfoColumn>
          <TextWrapper>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus laboriosam nihil aperiam ratione saepe sit alias rerum
              quaerat amet? Id maxime beatae facere illum sequi.
            </Description>
          </TextWrapper>
        </InfoColumn>
        <InfoColumn>
          <ImgContainer>
            <Img src='img/first-img.png' />
          </ImgContainer>
        </InfoColumn>
      </InfoRow>
    </InfoSec>
  )
}

export default InfoSection

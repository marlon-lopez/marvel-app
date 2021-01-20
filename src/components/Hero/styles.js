import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const HeroSection = styled.div`
  color: #fff;
  height: 90vh;
  background: linear-gradient(
    90deg,
    #000000 0%,
    #000000 28.77%,
    #802121 98.65%
  );

  @media screen and (max-width: 960px) {
    background: linear-gradient(
      0deg,
      #000000 0%,
      #000000 28.77%,
      #802121 98.65%
    );
  }
`
export const HeroContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  max-width: 400px;
  padding: 0;
  @media screen and (max-width: 920px) {
    margin: 24px 0;
  }
`
export const Text = styled.h2`
  font-size: 4rem;
  margin-bottom: 16px;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`
export const ImgWrapper = styled.div`
  display: flex;
  max-width: 500px;
`
export const Img = styled.img`
  width: 100%;
  max-height: 500px;
  @media screen and (max-width: 920px) {
    max-height: 400px;
  }
`

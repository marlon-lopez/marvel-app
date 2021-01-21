import styled from 'styled-components'
import { Container, ImgWrapper } from '../../GlobalStyles'

export const InfoSec = styled.div`
  background: #fff;
  color: #181818;
`
export const InfoRow = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (!reverse ? 'row' : 'row-reverse')};
  margin-top: 28px;
`
export const InfoColumn = styled.div`
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 920px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`

export const TextWrapper = styled.div`
  max-width: 400px;
  padding: 0;
  @media screen and (max-width: 920px) {
    margin: 24px 0;
  }
`
export const Description = styled.p`
  font-size: 1.4rem;
`

export const ImgContainer = styled(ImgWrapper)`
  padding: 16px 0;
  max-width: 300px;
`

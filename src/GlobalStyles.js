import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family :"Source Sans Pro",sans-serif
    }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  // padding: 15px 30px;

  @media screen and (max-width: 920px) {
    padding: 0 30px;
  }
`

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: center;
`

export const TextWrapper = styled.div`
  max-width: 400px;
  padding: 0;
  @media screen and (max-width: 920px) {
    margin: 24px 0;
  }
`
export const Img = styled.img`
  width: 100%;
  max-height: 500px;
  @media screen and (max-width: 920px) {
    max-height: 400px;
  }
`
export const Cards = styled.div`
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 16px;
  justify-content: center;
`
export const Title = styled.h2`
  text-align: center;
  margin: 24px 0;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
  font-size: 2.3rem;
  color: #161616;
`
export default GlobalStyles

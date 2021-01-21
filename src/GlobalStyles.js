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

export default GlobalStyles

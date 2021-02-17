import styled from 'styled-components'

export const HeroSection = styled.div`
  padding: 50px 0;
  color: #fff;
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

export const Text = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 4rem;
  margin-bottom: 16px;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`

import styled from 'styled-components'

export const FooterSection = styled.div`
  background: #161616;
  padding: 16x 0;
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const SocialIcons = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.4rem;
  margin: 0 16px;
`
export const Copyright = styled.p`
  font-size: 0.8rem;
  margin-top: 16px;
  color: #fff;
  text-align: center;
`

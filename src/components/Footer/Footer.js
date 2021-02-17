import React from 'react'
import { Container } from '../../GlobalStyles'
import {
  FooterSection,
  SocialIcons,
  SocialMediaWrapper,
  SocialIconLink,
  Copyright,
} from './styles'
import { FaDev, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <SocialMediaWrapper>
          <SocialIcons>
            <SocialIconLink>
              <FaDev />
            </SocialIconLink>
            <SocialIconLink>
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink>
              <MdEmail />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
        <Copyright>&copy;2020 Marlon Lopez</Copyright>
      </Container>
    </FooterSection>
  )
}

export default Footer

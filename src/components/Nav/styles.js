import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

import { Link } from 'react-router-dom'

export const NavBar = styled.div`
  height: 10vh;
  background: #070707;
`

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  color: #fff;
  align-items: center;
  position: relative;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    background: #151515;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    left: ${({ click }) => (click ? 0 : '-100%')};
    transition: all 0.5s ease;
  }
`

export const NavItem = styled.li`
  text-align: center;
  margin: 0 15px;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 15px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
`

export const NavLogo = styled.span`
  color: #fff;
  justify-self: flex-start;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 55%;
    right: 0;
    transform: translate(-100%, -55%);
    cursor: pointer;
  }
`

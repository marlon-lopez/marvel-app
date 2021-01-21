import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

import { Link } from 'react-router-dom'

export const NavBar = styled.div`
  height: 80px;
  background: #070707;
  position: sticky;
  top: 0;
`

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  color: #fff;
  align-items: center;
  position: relative;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 100;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    background: #151515;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 80px;
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

export const NavLogo = styled(Link)`
  font-family: 'Bebas Neue', cursive;
  text-decoration: none;
  color: #fff;
  justify-self: flex-start;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-100%, -50%);
    cursor: pointer;
  }
`

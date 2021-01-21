import React, { useState } from 'react'
//icons
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa'
//styles
import {
  NavBar,
  NavContainer,
  MobileIcon,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
} from './styles'

const Nav = () => {
  const [clickedBurger, setClickedBurger] = useState(false)
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <NavBar>
        <NavContainer>
          <NavLogo to='/'>Marvel</NavLogo>
          <MobileIcon onClick={() => setClickedBurger(!clickedBurger)}>
            {clickedBurger ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={clickedBurger}>
            <NavItem>
              <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/comics'>Comics</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </NavBar>
    </IconContext.Provider>
  )
}

export default Nav

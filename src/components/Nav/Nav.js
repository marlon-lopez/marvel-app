import React, { useState } from 'react'
//icons
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

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

  const changeClickedBurger = () => {
    setClickedBurger(!clickedBurger)
    document.body.style.overflowY = !clickedBurger ? 'hidden' : 'visible'
    console.log(clickedBurger)
  }
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <NavBar>
        <NavContainer>
          <NavLogo to='/'>Marvel</NavLogo>
          <MobileIcon onClick={changeClickedBurger}>
            {clickedBurger ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu click={clickedBurger}>
            <NavItem>
              <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/characters'>Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/comics'>Comics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/favorite'>
                <AiOutlineHeart />
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </NavBar>
    </IconContext.Provider>
  )
}

export default Nav

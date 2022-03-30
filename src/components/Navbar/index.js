import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import SlideDrawer from '../SlideDrawer';

const Navbar = () => {

  const [openPanel, setOpenPanel] = useState(false)

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/lend' activeStyle>
            Lending
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={() => setOpenPanel(true)}>Connect Wallet</NavBtnLink>
        </NavBtn>
      </Nav>
        <SlideDrawer 
        isOpenPanel={openPanel}
        setOpenPanel = {setOpenPanel}
        />
    </>
  );
};

export default Navbar;
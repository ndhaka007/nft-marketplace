import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  LogoImage,

} from './NavbarElements';
import SlideDrawer from '../SlideDrawer';
import Logo from '../../testing/logo.png';

const Navbar = () => {

    const [openPanel, setOpenPanel] = useState(false)

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <LogoImage src={Logo}/>
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
            tems2
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
            Blogs2
            Blogs3
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
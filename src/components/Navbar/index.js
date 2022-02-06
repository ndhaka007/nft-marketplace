import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import SlidingPanel from 'react-sliding-side-panel';
import ConnectWallet from '../../pages/ConnectWallet';
import SlideDrawer from '../SlideDrawer';

const Navbar = () => {

  const [openPanel, setOpenPanel] = useState(false)

  let closePanel = <button onClick={() => setOpenPanel(false)}>Close</button>

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
          <NavLink to='/events' activeStyle>
            Events
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
        closePanelButton = {closePanel}
        />
    </>
  );
};

export default Navbar;
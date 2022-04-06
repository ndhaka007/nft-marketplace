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

    return ( <
        >
        <
        Nav >
        <
        Bars / >
        <
        NavMenu >
        <
        NavLink to = '/'
        activeStyle >
        <
        h2 > Home < /h2> <
        /NavLink> <
        NavLink to = '/about'
        activeStyle >
        Stake <
        /NavLink> <
        NavLink to = '/lend'
        activeStyle >
        Lending <
        /NavLink> <
        NavLink to = '/annual'
        activeStyle >
        Liquidity Mining <
        /NavLink> <
        NavLink to = '/team'
        activeStyle >
        Yeild Farming <
        /NavLink> <
        NavLink to = '/blogs'
        activeStyle >
        Dashboard <
        /NavLink> { /* Second Nav */ } { /* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */ } <
        /NavMenu> <
        NavBtn >
        <
        NavBtnLink onClick = {
            () => setOpenPanel(true) } > Connect Wallet < /NavBtnLink> <
        /NavBtn> <
        /Nav> <
        SlideDrawer isOpenPanel = { openPanel }
        setOpenPanel = { setOpenPanel }
        /> <
        />
    );
};

export default Navbar;
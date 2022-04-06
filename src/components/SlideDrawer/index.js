import React, { useState } from 'react'
import './SlideDrawer.css'
import Backdrop from './Backdrop.js'
import ConnectWallet from '../../pages/ConnectWallet';

const SlideDrawer = ({ isOpenPanel, setOpenPanel }) => {
    let drawerClasses = 'side-drawer'
    let backdrop;

    const handleOnClick = (e) => {
        console.log(JSON.stringify(e.target.id));
        if (e.target.id === 'backdrop') {
            setOpenPanel(false);
        }
    }

    if (isOpenPanel) {
        drawerClasses = 'side-drawer open'
        backdrop = <Backdrop />;
    }

    return (
        <div onClick = {handleOnClick}>
            <div className={drawerClasses}>
                {/* add empty transaparent block to handle alignment of side bar */}
                <ConnectWallet />
            </div>
            <div>
                {backdrop}
            </div>
        </div>
    );
};

export default SlideDrawer;
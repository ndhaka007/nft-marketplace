import React, { useState } from 'react'
import './SlideDrawer.css'
import Backdrop from './Backdrop.js'
import ConnectWallet from '../../pages/ConnectWallet';

const SlideDrawer = ({ isOpenPanel, closePanelButton }) => {
    let drawerClasses = 'side-drawer'
    let backdrop;

    if (isOpenPanel) {
        drawerClasses = 'side-drawer open'
        backdrop = <Backdrop />;
    }

    return (
        <div>
            <div className={drawerClasses}>
                <ConnectWallet />
                {closePanelButton}
            </div>
            <div>
                {backdrop}
            </div>
        </div>
    );
};

export default SlideDrawer;
import React, { useState } from 'react';
import './ConnectWallet.css';
// import { encrypt } from 'eth-sig-util'
// import MetaMaskOnboarding from '@metamask/onboarding'



const ConnectWallet = () => {

    const [errorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [conntButtonText, setConntButtonText] = useState('Metamask')
    // const onboardButton = document.getElementById('connectButton')
    // const getAccountsButton = document.getElementById('getAccounts')
    // const getAccountsResults = document.getElementById('getAccountsResult')


    const isMetaMaskInstalled = () => {
        const { ethereum } = window
        return Boolean(ethereum && ethereum.isMetaMask)
    }

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(
                    result => {
                        accountChangeHandler(result[0]);
                    })
        } else {
            setErrorMessage('MetaMask is not installed')
        }
    }

    const accountChangeHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    }

    return (
        <div className='connectWallet'>
            <h2>Connect Your Wallet</h2>
            <button onClick={connectWalletHandler}>{conntButtonText}</button>

            {errorMessage}
        </div>
    );
};

export default ConnectWallet;
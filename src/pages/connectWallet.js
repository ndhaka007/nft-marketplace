import React, {useState} from 'react';
import './ConnectWallet.css';
// import { encrypt } from 'eth-sig-util'
// import MetaMaskOnboarding from '@metamask/onboarding'


  
const ConnectWallet = () => {

//     const forwarderOrigin = currentUrl.hostname === 'localhost'
//   ? 'http://localhost:9010'
//   : undefined

  const [errorMessage, setErrorMessage] = useState(null)
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [conntButtonText, setConntButtonText] = useState('Connect Metamask Wallet')
// const onboardButton = document.getElementById('connectButton')
// const getAccountsButton = document.getElementById('getAccounts')
// const getAccountsResults = document.getElementById('getAccountsResult')



const isMetaMaskInstalled = () => {
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
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

    // let onboarding
    // try {
    //   onboarding = new MetaMaskOnboarding({ forwarderOrigin })
    // } catch (error) {
    //   console.error(error)
    // }

  return (
    <div className='connectWallet'>
        <button onClick={connectWalletHandler}>{conntButtonText}</button>
     
      {errorMessage}
    </div>
  );
};
  
export default ConnectWallet;
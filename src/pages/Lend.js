import React, { useState, useEffect  } from 'react';
import web3 from 'web3'
import './ConnectWallet.css';
import AddressProviderABI from '../abi/aave/addressProviderABI.json';
import LendingPoolABI from '../abi/aave/lendingPoolABI.json';
import ConnectWallet from './ConnectWallet';
// import { encrypt } from 'eth-sig-util'
// import MetaMaskOnboarding from '@metamask/onboarding'



const Lend = () => {
    
    const LendAave = () => {
        Depositing();
    }

    return (
        <div>
            Lend AAVE
            <li>Amount</li>
            <button onClick={LendAave}>Lend</button>
        </div>
    );
};

export const Depositing  = async () => {

    const Web3 = new web3(window.ethereum);
    console.log(Web3.eth);
    console.log(window.ethereum);
    const providerInstance = new Web3.eth.Contract(AddressProviderABI, "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8");

    const lendingPoolAddress = await providerInstance.methods.getLendingPool().call()
    .catch((e) => {
        throw Error(`Error getting lendingPool address: ${e.message}`)
    });

    const account = localStorage.getItem('AccountID');
    console.log(account);

    const lendingPoolInstance = new Web3.eth.Contract(LendingPoolABI, lendingPoolAddress);

    lendingPoolInstance.methods.deposit(
        "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", 10, 0).send({from: account, value: 10})
        .once('transactionHash', (hash) => {
          // transaction hash
        })
        .on('confirmation', (number, receipt) => {
          // number of confirmations
        })
        .on('error', (error) => {
            console.log(error);
        });
}

export default Lend;

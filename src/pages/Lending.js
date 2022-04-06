import React, { useState, useEffect } from 'react';
import web3 from 'web3'
import './ConnectWallet.css';
import AddressProviderABI from '../abi/aave/addressProviderABI.json';
import LendingPoolABI from '../abi/aave/lendingPoolABI.json';
import aTokenABI from '../abi/aave/aTokenABI.json';
import ConnectWallet from './ConnectWallet';
import 'bulma/css/bulma.css';
// import { encrypt } from 'eth-sig-util'
// import MetaMaskOnboarding from '@metamask/onboarding'

const account = localStorage.getItem('AccountID');

const Lend = () => {
    const [Amount, setAmount] = useState(null);
    const [TokenAdd, setTokenAdd] = useState(null);
    const [LendTokenAdd, setLendTokenAdd] = useState(null);
    const [withdrawAmount, setwithdrawAmount] = useState(null);

    const LendAave = () => {
        Depositing(Amount, "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");
    }

    const WithdrawAave = () => {
        Withdraw(withdrawAmount, "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");
    }

    const updateQuery = event => {
        setAmount(event.target.value);
        console.log(Amount);
    }
    const updateQuery1 = event => {
        setLendTokenAdd(event.target.value);
        console.log(LendTokenAdd);
    }
    const updateQuery2 = event => {
        setwithdrawAmount(event.target.value);
    }
    const updateQuery3 = event => {
        setTokenAdd(event.target.value);
    }


    return ( <
        div >
        Lend AAVE 1 ETH = 1000000000000000000 ETH: 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE <
        li > Amount < /li> <
        div className = "control" >
        <
        input onChange = { updateQuery }
        className = "input"
        type = "type"
        placeholder = "Enter Amount..." / >
        <
        /div> <
        li > Token Address < /li> <
        div className = "control" >
        <
        input onChange = { updateQuery1 }
        className = "input"
        type = "type"
        placeholder = "Enter Address..." / >
        <
        /div> <
        button onClick = { LendAave } > Lend < /button> <
        li > Withdraw Amount < /li> <
        div className = "control" >
        <
        input onChange = { updateQuery2 }
        className = "input"
        type = "type"
        placeholder = "Enter Amount..." / >
        <
        /div> <
        li > Token Address < /li> <
        div className = "control" >
        <
        input onChange = { updateQuery3 }
        className = "input"
        type = "type"
        placeholder = "Enter Address..." / >
        <
        /div> <
        button onClick = { WithdrawAave } > Withdraw < /button>

        <
        /div>

    );
};

export const Withdraw = async(withdrawAmount, TokenAdd) => {

    const Web3 = new web3(window.ethereum);
    console.log(Web3.eth);
    console.log(window.ethereum);
    const providerInstance = new Web3.eth.Contract(AddressProviderABI, "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728");

    const lendingPoolAddress = await providerInstance.methods.getLendingPool().call()
        .catch((e) => {
            throw Error(`Error getting lendingPool address: ${e.message}`)
        });



    console.log(account);

    const lendingPoolInstance = new Web3.eth.Contract(LendingPoolABI, lendingPoolAddress);
    //0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
    const reserveData = await lendingPoolInstance.methods.getReserveData(TokenAdd).call()
        .catch((e) => {
            throw Error(`Error getting aave reserve data: ${e.message}`)
        });
    // Get aToken address
    const aTokenAddress = reserveData.aTokenAddress;
    console.log(aTokenAddress);
    // Load aToken
    const aTokenInstance = new Web3.eth.Contract(aTokenABI, aTokenAddress);
    // Redeem asset
    console.log(withdrawAmount);
    aTokenInstance.methods.redeem(withdrawAmount).send({ from: account })
        .once('transactionHash', (hash) => {
            // transaction hash
        })
        .on('confirmation', (number, receipt) => {
            // number of confirmations
        })
        .on('error', (error) => {
            console.log(error);
        });



};



export const Depositing = async(Amount, LendTokenAdd) => {
    console.log(Amount);
    console.log(LendTokenAdd);
    const Web3 = new web3(window.ethereum);
    console.log(Web3.eth);
    console.log(window.ethereum);
    const providerInstance = new Web3.eth.Contract(AddressProviderABI, "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728");

    const lendingPoolAddress = await providerInstance.methods.getLendingPool().call()
        .catch((e) => {
            throw Error(`Error getting lendingPool address: ${e.message}`)
        });



    console.log(account);

    const lendingPoolInstance = new Web3.eth.Contract(LendingPoolABI, lendingPoolAddress);

    lendingPoolInstance.methods.deposit(
            LendTokenAdd, Amount, 0).send({ from: account, value: Amount })
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
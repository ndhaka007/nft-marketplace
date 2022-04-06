import React, { useState, useEffect } from 'react'
import web3 from 'web3'
import './ConnectWallet.css'
import AddressProviderABI from '../abi/aave/addressProviderABI.json'
import LendingPoolABI from '../abi/aave/lendingPoolABI.json'
import aTokenABI from '../abi/aave/aTokenABI.json'
import ConnectWallet from './ConnectWallet'
import 'bulma/css/bulma.css'
import './lend.css'
// import { encrypt } from 'eth-sig-util'
// import MetaMaskOnboarding from '@metamask/onboarding'

const account = localStorage.getItem('AccountID')

const Lend = () => {
  const [Amount, setAmount] = useState(null)
  const [TokenAdd, setTokenAdd] = useState(null)
  const [LendTokenAdd, setLendTokenAdd] = useState(null)
  const [withdrawAmount, setwithdrawAmount] = useState(null)

  const LendAave = () => {
    Depositing(Amount, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
  }

  const WithdrawAave = () => {
    Withdraw(withdrawAmount, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
  }

  const updateQuery = (event) => {
    setAmount(event.target.value)
    setwithdrawAmount(event.target.value)
    console.log(Amount)
  }
  const updateQuery1 = (event) => {
    setLendTokenAdd(event.target.value)
    console.log(LendTokenAdd)
  }
  const updateQuery2 = (event) => {
    setwithdrawAmount(event.target.value)
  }
  const updateQuery3 = (event) => {
    setTokenAdd(event.target.value)
  }

  let populate_list = () => {
    let data = []
    for (let i = 0; i < 100; i++) {
      let num = i / 100
      data.push(
        <tr>
          <td> ETH </td> <td> AAVE V1 </td> <td> {num} </td> <td> Low </td>
          <td>
            
            <div className="control">
              <input
                onChange={updateQuery}
                className="input"
                type="type"
                placeholder="Enter Amount..."
              />
            </div>
          </td>
          <td>
            
            <button onClick={LendAave}> Lend </button>
          </td>
          <td>
            
            <button onClick={WithdrawAave}> Withdraw </button>
          </td>
        </tr>,
      )
    }
    console.log(data)
    return data
  }

  return (
    <body>
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-8">
            <div>
              <h1 class="title"> All open defi lending pools </h1>
            </div>
            <table class="table is-bordered is-hoverable">
              <thead>
                <tr>
                  <th> Asset </th><th> Pool Name </th> <th> APY </th>
                  <th> Risk </th> <th> Amount </th> <th> Lend </th>
                  <th> Withdraw </th>
                </tr>
              </thead>
              <tbody> {populate_list()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </body>
  )
}

export const Withdraw = async (withdrawAmount, TokenAdd) => {
  const Web3 = new web3(window.ethereum)
  console.log(Web3.eth)
  console.log(window.ethereum)
  const providerInstance = new Web3.eth.Contract(
    AddressProviderABI,
    '0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728',
  )

  const lendingPoolAddress = await providerInstance.methods
    .getLendingPool()
    .call()
    .catch((e) => {
      throw Error(`Error getting lendingPool address: ${e.message}`)
    })

  console.log(account)

  const lendingPoolInstance = new Web3.eth.Contract(
    LendingPoolABI,
    lendingPoolAddress,
  )
  //0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
  const reserveData = await lendingPoolInstance.methods
    .getReserveData(TokenAdd)
    .call()
    .catch((e) => {
      throw Error(`Error getting aave reserve data: ${e.message}`)
    })
  // Get aToken address
  const aTokenAddress = reserveData.aTokenAddress
  console.log(aTokenAddress)
  // Load aToken
  const aTokenInstance = new Web3.eth.Contract(aTokenABI, aTokenAddress)
  // Redeem asset
  console.log(withdrawAmount)
  aTokenInstance.methods
    .redeem(withdrawAmount)
    .send({ from: account })
    .once('transactionHash', (hash) => {
      // transaction hash
    })
    .on('confirmation', (number, receipt) => {
      // number of confirmations
    })
    .on('error', (error) => {
      console.log(error)
    })
}

export const Depositing = async (Amount, LendTokenAdd) => {
  console.log(Amount)
  console.log(LendTokenAdd)
  const Web3 = new web3(window.ethereum)
  console.log(Web3.eth)
  console.log(window.ethereum)
  const providerInstance = new Web3.eth.Contract(
    AddressProviderABI,
    '0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728',
  )

  const lendingPoolAddress = await providerInstance.methods
    .getLendingPool()
    .call()
    .catch((e) => {
      throw Error(`Error getting lendingPool address: ${e.message}`)
    })

  console.log(account)

  const lendingPoolInstance = new Web3.eth.Contract(
    LendingPoolABI,
    lendingPoolAddress,
  )

  lendingPoolInstance.methods
    .deposit(LendTokenAdd, Amount, 0)
    .send({ from: account, value: Amount })
    .once('transactionHash', (hash) => {
      // transaction hash
    })
    .on('confirmation', (number, receipt) => {
      // number of confirmations
    })
    .on('error', (error) => {
      console.log(error)
    })
}

export default Lend

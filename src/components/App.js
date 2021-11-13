
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Web3 from 'web3';
import Main from './Main';
import Defi from '../abis/Defi.json'
import Loader from 'react-loader-spinner';
import MetamaskNotSupport from './MetamaskNotSupport';




const App = () => {

  //App State
  const [contract, setContract] = useState(null)
  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState(0)
  const [contractBalance, setContractBalance] = useState(0)
  const [stakeTokenBalance, setStakeTokenBalance] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false)


  useEffect(() => {

    setIsLoading(true)
    loadBlockchainData()
    setIsLoading(false)

  }, [])


  //load data from blockchain
  const loadBlockchainData = async () => {

    if (typeof window.ethereum === 'undefined') {
      window.alert('Please install MetaMask')
      setIsMetamaskInstalled(false)
      return
    }

    await window.ethereum.enable()
    setIsMetamaskInstalled(true)

    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.getAccounts()

    //load balance
    if (typeof accounts[0] !== 'undefined') {
      const balance = await web3.eth.getBalance(accounts[0])
      setAccount(accounts[0])
      setBalance(web3.utils.fromWei(balance, 'Ether'))
    } else {
      window.alert('Please login with MetaMask')
    }


    //load contracts
    try {
      const smart_contract_address = process.env.REACT_APP_SMART_CONTRACT_ADDRESS;
      const contract = new web3.eth.Contract(Defi.abi, smart_contract_address)
      console.log(contract);
      setContract(contract)

      // Load Token info
      const contractBalance = await contract.methods.contractBalance().call()
      setContractBalance(web3.utils.fromWei(contractBalance, 'Ether'))
      const stakeTokenBalance = await contract.methods.depositedTokens(accounts[0]).call()
      setStakeTokenBalance(web3.utils.fromWei(stakeTokenBalance, 'Ether'))

    } catch (e) {
      console.log('Error', e)
      window.alert('Contracts not deployed to the current network')
    }

  }


  //event handler for Deposit
  const handleDeposit = async (event, amount) => {
    event.preventDefault()

    setIsLoading(true)

    try {
      await contract.methods.deposit(amount).send({ from: account })
    } catch (e) {
      console.log('Error, withdraw: ', e)
    }

    setIsLoading(false)

  }

  //event handler for Withdraw
  const handleWithdraw = async (event, amount) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      await contract.methods.withdraw(amount).send({ from: account })
    } catch (e) {
      console.log('Error, withdraw: ', e)
    }

    setIsLoading(false)
  }


  //event handler for Claim
  const handleClaim = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const recipt = await contract.methods.claim().send({ from: account })
      console.log(recipt);
    } catch (e) {
      console.log('Error, withdraw: ', e)
    }

    setIsLoading(false)

  }


  return (
    <div>
      <Navbar account={account} balance={balance} />
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
            <div className="content mr-auto ml-auto">
              
              {isLoading ?
                <div className="container-fluid mt-5 text-center">
                  <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}

                  />
                  <p>Data is Loading...</p>
                </div>
                :
                isMetamaskInstalled ?
                  <Main
                    balance={balance}
                    contractBalance={contractBalance}
                    stakeTokenBalance={stakeTokenBalance}
                    handleDeposit={handleDeposit}
                    handleWithdraw={handleWithdraw}
                    handleClaim={handleClaim}
                  />
                  : <MetamaskNotSupport />

              }

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;



import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div className="App">
      {
        account === null ? (
          <div>
            {
              isWalletInstalled ? (
                <button className="btn" onClick={connectWallet}>
                  Connect Wallet
                </button>
              ) : (
                <p>Install MetaMask wallet</p>
              )
            }
          </div>
        ) : (
          <div>
            <p>Connected as: {account}</p>
          </div>
        )
      }
    </div>
  );
}

export default App;

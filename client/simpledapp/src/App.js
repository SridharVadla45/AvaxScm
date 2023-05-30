import "./App.css";
import { useState, useEffect } from "react";
// import contractABI from "./contract/CoffeeDapp.json";
import { ethers } from "ethers";
import Home from "./Components/Home";


function App() {
  const [account, setAccount] = useState("");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contractInstance: null,
  });

  const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const ABI =[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "buyCoffee",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getList",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "orderAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "orderId",
              "type": "uint256"
            }
          ],
          "internalType": "struct CoffeeDapp.order[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "orderList",
      "outputs": [
        {
          "internalType": "address",
          "name": "orderAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  useEffect(() => {
    const connectWallet = async () => {
      try {
        if (window.ethereum) {
          const Account = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(Account);

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const ContractInstance = new ethers.Contract(
            ContractAddress,
            ABI,
            signer
          );

          
          setState({
            provider: provider,
            signer: signer,
            contractInstance: ContractInstance,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  return (
    <div className="w-full h-20 bg-blue-300 text-white ">
      <h1 className="flex items-center justify-start py-6 px-4 fixed bg-black rounded-md opacity-50">
        Account address: {account}
      </h1>
      <Home state={state} />
     
     
    </div>
  );
}

export default App;

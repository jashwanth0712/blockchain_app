import React,{useEffect,useState} from "react";
import {ethers} from 'ethers';
import {contractABI,contractAddress} from '../utils/constants';
export const TransactionContext = React.createContext();
const {ethereum}= window;

const getEthereumContract =()=>{
    console.log("get contract ran")
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);
    console.log(
        "ethereum contract is  : ",{
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ({children})=>{
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData,setformData]=useState({addressTo:'',amount:'',keyword:'',message:''});

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
      };
    const checkIfWalletIsConnected = async()=>{
        if(!ethereum) return alert("Please install metamask");
        const accounts = await ethereum.request({method:'eth_accounts'});
        if(accounts.length){
            setCurrentAccount(account[0]);

            //getAllTransactions();
        }else{
            console.log("No accounts found");
        }
        console.log(accounts);
    }


    const connectWallet = async ()=>{
        try{
            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({method:'eth_requestAccounts'});
          //  console.log("account is  : ",accounts[0]);
            setCurrentAccount(accounts[0]);
        }
        catch(error){
            console.log(error)
            throw new Error("no ethereum object")
        }
    }

    const sendTransaction = async()=>{
        try{
            if(!ethereum) return alert("Please install metamask");

            console.log('send transactions ran')
            const{addressTo,amount,keyword,message}=formData;
            getEthereumContract();
        }
        catch(error)
        {  
        throw new Error("No ethereum object")
        }
    }

    useEffect(()=>{
        checkIfWalletIsConnected();
    },[]);
    return(
        <TransactionContext.Provider value={{connectWallet,currentAccount,formData,setformData,handleChange,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}
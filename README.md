# Blockchain App
This is a practice project to learn the implementation of block chain transaction through react and solidity
- you can view the live project <a href="https://blockchain-practice-application.netlify.app/">here</a>
[![Watch the video](https://github.com/jashwanth0712/Tongue_images/blob/scripts/Screenshot%202022-06-18%20172356.png?raw=true)](https://youtu.be/bpWokQ_Q_fc)
## How To Use
- make sure that you have <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">metamask</a> extension installed
- select `goerli test network` since the following project is done under `goerli test network`
- click `Connect Wallet` button
- login to the metamask account 
- you can now view your previous transactions
- you can also send new transactions by mentioning `reciever address`  , `amount` , `keyword` and `message` in the input fields and click `send`
- `keyword` is used to determine the gif to be appeared for that transaction 
- note that to send the transactions you must be having some balance in your metamask wallet , don't worry you can get free testnet balance to faucets [Section 1](#section-1)
- you can also recieve transactions by giving your wallet address to others and allowing them to send you transactions

## <a name="section-1"></a> Steps to get free testnet Ethers 
- make sure that you have <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">metamask</a> extension installed
- open metamask and select `goerli Test Network`
<img src="https://github.com/jashwanth0712/Tongue_images/blob/scripts/Screenshot%202022-06-18%20181914.png?raw=true" height=300px></img>
- copy your `Account number` and paste the `Account number` in the input field of the any  <a href="https://goerlifaucet.com/">goerli faucet </a> site 
- after mentioning your `Account number` you will get free testnet Eth within 30min

## Installation
write the following commands on the terminal
```sh
git init
git clone "https://github.com/jashwanth0712/blockchain_app.git"
```
Get inside `/blockchain_app/client` folder and install node and run the file
```sh
npm install
```
 Create a file named `.env` inside `client` folder
 ```
 VITE_GIPHY_API=79eIGXNa3G8AAkdizJOEvGzYgAgBsSkQ
 ```
 you may also get a new api key from <a href="https://developers.giphy.com" >giffy</a> 


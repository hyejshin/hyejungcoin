const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('7cddc874bd9debc4dd40f89881cfed86d1dc9e50492079eacff02ee8187b8f68');
const myWalletAddress = myKey.getPublic('hex');


let hyejungCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key2', 10);
tx1.signTransaction(myKey);
hyejungCoin.addTransaction(tx1);

console.log('\n Starting the miner ...');
hyejungCoin.minePendingTransactions(myWalletAddress);


console.log('\nBalance of hyejung is', hyejungCoin.getBalanceOfAddress(myWalletAddress));

hyejungCoin.chain[1].transactions[0].amount = 1;
console.log('\nIs chain valid?', hyejungCoin.isChainValid());

// console.log(JSON.stringify(hyejungCoin, null, 3));

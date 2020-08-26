const Web3 = require("web3");

// Ethereum provider
const provider = new Web3.providers.WebsocketProvider(
  "wss://goerli.infura.io/ws/v3/5687b932e64441e5a297a0bfba8895cd"
);
const web3 = new Web3(provider);

const chil_provider = new Web3.providers.HttpProvider(
  "https://rpc-mumbai.matic.today"
);
const child_web3 = new Web3(chil_provider);

async function checkInclusion(txHash) {
  let txDetails = await child_web3.eth.getTransactionReceipt(txHash);

  block = txDetails.blockNumber;
  return new Promise(async (resolve, reject) => {
    let results = await web3.eth.getPastLogs({
      fromBlock: (await web3.eth.getBlockNumber()) - 10000,
      toBlock: "latest",
      address: "0x2890ba17efe978480615e330ecb65333b880928e",
    });
    for (result of results) {
      if (result.data) {
        let transaction = web3.eth.abi.decodeParameters(
          ["uint256", "uint256", "bytes32"],
          result.data
        );
        if (block <= transaction["1"]) {
          resolve(result);
        }
      }
    }
    resolve(false);
  });
}

// transaction hash of the transaction on matic
checkInclusion(
  "0xedc8e1cda07961c328b0525632627bd16c3bf4509a001468f9f36d0840c11507"
)
  .then((res) => {
    console.log(res);
    provider.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });

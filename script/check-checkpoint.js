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
      fromBlock: (await web3.eth.getBlockNumber()) - 91000,
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
  "0xfe4cdaa7ba4a1a78723b91e7082c9a3611b2ccc40992ffc4964d27f2e8862ab8"
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    provider.disconnect();
  });

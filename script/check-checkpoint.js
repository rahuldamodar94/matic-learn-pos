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
    web3.eth.subscribe(
      "logs",
      {
        address: "0x2890ba17efe978480615e330ecb65333b880928e",
        fromBlock: (await web3.eth.getBlockNumber()) - 250,
      },
      function (error, result) {
        if (error) {
          reject(error);
        }

        if (result.data) {
          let transaction = web3.eth.abi.decodeParameters(
            ["uint256", "uint256", "bytes32"],
            result.data
          );
          if (block <= transaction["1"]) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
      }
    );
  });
}

// transaction hash of the transaction on matic
checkInclusion(
  "0x44bd523110add8a2605c44c155ca64c4da7c354e5cb638528c9b8a770e18355e"
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

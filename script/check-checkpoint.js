const Web3 = require("web3");

// Ethereum provider
const provider = new Web3.providers.WebsocketProvider(
  "wss://goerli.infura.io/ws/v3/<API-KEY>"
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
  "0x1fd0b249ae7ed69be6b1b9d5daa43a5f2b6d54dc6c1ec61ca2e1c60ed306448a"
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

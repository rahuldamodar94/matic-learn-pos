const Web3 = require("web3");

// Ethereum provider
const provider = new Web3.providers.WebsocketProvider(
  "<Ethereum web socket provider>"
);
const web3 = new Web3(provider);

async function check(block) {
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

check(4003980)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    provider.disconnect();
  });

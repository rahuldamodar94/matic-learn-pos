const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const txHash = "tx hash from matic";

const execute = async () => {
  try {
    const tx = await maticPOSClient.posRootChainManager.exit(
      txHash,
      "0xb7e5ddf32ab01f4630c5cf14dac344aba9e35bc5d91d1aa31c55f13c19094913"
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const txHash =
  "0xc9f6ba0ad48a8812a0b22bcb8a205f3c5cb41ccf1ce2908b6ebe84a5e6c1a64f";

const execute = async () => {
  try {
    const tx = await maticPOSClient.posRootChainManager.exit(
      txHash,
      "0xd67e513db128e9551b5eea287725891be42d9cf2596c29bbbfecf012ba6799e4"
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

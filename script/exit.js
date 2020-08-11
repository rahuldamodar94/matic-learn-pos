const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const txHash =
  "0xc9f6ba0ad48a8812a0b22bcb8a205f3c5cb41ccf1ce2908b6ebe84a5e6c1a64f";

const logEventSignature =
  "0x46269ee522654e4067695b81b5bcafa7f76e1d31ef24c997420450b0c6626531";

const execute = async () => {
  try {
    const tx = await maticPOSClient.posRootChainManager.exit(
      txHash,
      logEventSignature
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

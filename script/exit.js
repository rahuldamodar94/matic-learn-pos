const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const txHash =
  "0x503ca0113411535bb86d5b0a4d130fd708794fdb91614d9b24a589bc6e0c4091";

const logEventSignature =
  "0x93f3e547dcb3ce9c356bb293f12e44f70fc24105d675b782bd639333aab70df7";

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

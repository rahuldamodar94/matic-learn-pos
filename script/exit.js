const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const txHash =
  "0xb4a942175121fd61594499d57b84bf8e50e034c171d4ff66b5920fd7df80027f";

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

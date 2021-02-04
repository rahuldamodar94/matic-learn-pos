const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const exit = async (txHash, rootTunnelAddress) => {
  try {
    const payload = await maticPOSClient.posRootChainManager.processReceivedMessage(
      rootTunnelAddress,
      txHash
    );
    return payload;
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

const txHash =
  "0x776cfd1d4851a6f7b2b2e29576a828d5bfb969beee9ad96628a35b92e7094a9e";
const rootTunnelAddress = "0xed41Ccad5cF294f7Fd1B7C11ca11A7C88948eC58";

exit(txHash, rootTunnelAddress)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = exit;

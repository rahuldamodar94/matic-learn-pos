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
  "0xb511fa1620e65e3d1931ef3c955bc528d4c9e8640d78a17cace81636948d22fd";
const rootTunnelAddress = "";

exit(txHash, rootTunnelAddress)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = exit;

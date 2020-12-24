const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const exit = async (txHash) => {
  try {
    const payload = await maticPOSClient.posRootChainManager.getExitPayload(txHash)
    return (payload)
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

const burnHash =
  "0xb511fa1620e65e3d1931ef3c955bc528d4c9e8640d78a17cace81636948d22fd";

exit(burnHash).then(res => {
  console.log(res)
}).catch(err  => {
  console.log(err)
})

module.exports = exit

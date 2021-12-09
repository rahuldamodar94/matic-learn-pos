const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const exit = async () => {
  try {
    const payload = await maticPOSClient.posRootChainManager.customPayload(
      "0xff6e299d96bec2baa409e2a77e17ebe7fa7e992b6126c20b2ac326d0f95b946a",
      "0xebff2602b3f468259e1e99f613fed6691f3a6526effe6ef3e768ba7ae7a36c4f")
    console.log(payload)
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

exit()
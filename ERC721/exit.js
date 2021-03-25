const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  "0x77e25ca3558e5c5956815808305fcdcef41e7b9ad1530eb12b05a167b8f21f9d";

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC721WithMetadata(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

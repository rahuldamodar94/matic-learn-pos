const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  "0xa1edc57025ffc76da4014e7e1485df811862ca3492ac65220ec6e6b2c2ef873a";

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC721(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

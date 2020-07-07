const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  "0x547fafec9754b48970bb73ba4e2b6138efd0e51404ea788555e4706ee7c61cdc";

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC20(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

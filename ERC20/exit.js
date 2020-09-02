const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  "0xff9ec1610020b164194f1293c0df6d807ba5cb972092f054582da0ca12c7fa9c";

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC20(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

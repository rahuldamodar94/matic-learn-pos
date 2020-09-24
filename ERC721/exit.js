const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const burnHash =
  "0x6dda0491812890543ad5ca67fd56f6d76b8674db0a9b9dfab991e7732fb4b681";

const execute = async () => {
  try {
    const tx = await maticPOSClient.exitBatchERC721(burnHash);
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

const config = require("../config");
const utils = require("../utils");
const maticPOSClient = utils.getMaticPOSClient();

const execute = async () => {
  try {
    const tx = await maticPOSClient.depositBatchERC721ForUser(
      config.root.DERC721,
      config.user.address,
      ["1", "2"]
    );
    console.log(tx.transactionHash); // eslint-disable-line
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

execute().then(() => process.exit(0));

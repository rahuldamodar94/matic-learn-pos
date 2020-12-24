const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const exit = require("./ERC20/exit");
/**
 * Root route, middlewares
 */

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/payload', async (req,res) => {
    let burnTxHash = req.query.txHash
    let payload = await exit(burnTxHash)
    return payload
})

app.listen(7000, () => {
    console.log("Server running on", 7000);
});

module.exports = app;

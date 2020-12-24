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

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.get('/payload', async (req,res) => {
    let burnTxHash = req.query.txHash
    let payload = await exit(burnTxHash)
    return payload
})

app.listen(config.port, () => {
    console.log("Server running on", config.port);
});

module.exports = app;

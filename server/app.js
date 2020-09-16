const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { notFound, handleError } = require("./middlewares/errorHandler");
const httpLogger = require("./middlewares/httpLogger");
const logger = require("./library/logger");
const { initdb } = require("./initdb");
const { formatResponse } = require("./library/formatResponse");
let port = process.env.PORT || 3001;

/**config env */
dotenv.config();

/**init app */
const app = express();

/**middlewares */
app.use(httpLogger);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authToken, access-control-allow-origin"
  );
  next();
});
app.get("/api", (req, res) => {
  res.status(200).send("Welcome to port`de - API");
});
app.use(notFound);
app.use(handleError);
initdb();
app.listen(port, () => logger.info(`Portfolio server running on-${port}`));

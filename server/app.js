const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { notFound, handleError } = require("./middlewares/errorHandler");
const httpLogger = require("./middlewares/httpLogger");
let port = process.env.PORT || process.env.API_PORT;

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
app.use(notFound);
app.use(handleError);

app.listen(port, () => console.log(`Portfolio server running on-${port}`));

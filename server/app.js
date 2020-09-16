const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

let port = process.env.PORT || process.env.API_PORT;

/**config env */
dotenv.config();
/**init app */
const app = express();
/**middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

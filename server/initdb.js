const mongoose = require("mongoose");
const logger = require("./library/logger");

exports.initdb = () => {
  mongoose.connect(process.env.DB_CONNECT, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("error", (error) => {
    logger.error(`Error COnenctiong DB: ${error.message}`);
  });
  mongoose.connection.on("open", (error) => {
    error
      ? logger.error(`Error COnenctiong DB: ${error.message}`)
      : logger.info("DB CONNECTION SUCCESS");
  });
};

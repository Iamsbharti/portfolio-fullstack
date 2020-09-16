const { createLogger, transports } = require("winston");
const { format } = require("morgan");

const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  format: format.combine(
    format.timeStamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf((info) => `${info.timeStamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: "/logs/all-logs.log",
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ],
});

module.exports = logger;

const jwt = require("jsonwebtoken");
const logger = require("../library/logger");

const isAuthorized = async (req, res, next) => {
  logger.info("Authorizing user");
  const { authToken } = req.header("authToken");
  const { userId } = req.body;
  logger.info(`auth-${authToken.length}--${userId}`);

  let decoded = await jwt.verify(authToken, process.env.TOKEN_SECRET);
  logger.info(`decoded-info-${decoded}`);

  next();
};
module.exports = { isAuthorized };

const User = require("../model/User");
const shortid = require("shortid");
const bcrypt = require("bcrypt");
const logger = require("../library/logger");

const createUser = async (req, res) => {
  logger.info("create user control");

  let userSchema = new User({
    firstName: "Saurabh",
    lastName: "Bharti",
    userId: shortid.generate(),
    password: await bcrypt.hash("Saurabh@123", await bcrypt.genSalt(11)),
  });
  logger.info(`schema: ${userSchema}`);
  let userSaved = await User.create(userSchema);
  logger.info(`user created ${userSaved}`);
  return res.status(200).json(userSaved);
};
module.exports = { createUser };

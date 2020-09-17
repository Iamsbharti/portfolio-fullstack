const User = require("../model/User");
const shortid = require("shortid");
const bcrypt = require("bcrypt");
const logger = require("../library/logger");

const createUser = async (req, res) => {
  let userSchema = new User({
    firstName: "Saurabh",
    lastName: "Bharti",
    userId: shortid.generate(),
    password: bcrypt.hash("Saurabh@123", await bcrypt.genSalt(11)),
  });
  logger.info(`schema: ${userSchema}`);
  let userSaved = await User.create(userSchema);
  logger.info(`user created ${userSaved}`);
};
module.exports = createUser;

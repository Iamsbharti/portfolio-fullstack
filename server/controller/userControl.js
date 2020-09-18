const User = require("../model/User");
const shortid = require("shortid");
const bcrypt = require("bcrypt");
const logger = require("../library/logger");
const { formatResponse } = require("../library/formatResponse");
const { getToken } = require("../library/generateToken");

const createUser = async (req, res) => {
  logger.info("create user control");

  let userSchema = new User({
    firstName: "Saurabh",
    lastName: "Bharti",
    userName: "sb",
    userId: shortid.generate(),
    password: await bcrypt.hash("Saurabh@123", await bcrypt.genSalt(11)),
  });
  logger.info(`schema: ${userSchema}`);
  let userSaved = await User.create(userSchema);
  logger.info(`user created ${userSaved}`);
  return res.status(200).json(userSaved);
};
const adminLogin = async (req, res) => {
  logger.info("Admin Login Control");
  const { userName, password } = req.body;
  /**verify the username */
  let userFound = await User.findOne({ userName: userName });
  if (!userFound) {
    return res
      .status(404)
      .json(formatResponse(true, 404, "User Not Found", null));
  }
  /**authenticate user */
  let passwordMatch = await bcrypt.compare(password, userFound.password);
  /**generate authtoken */
  let userdata = userFound.toObject();
  delete userdata.password;
  let token = await getToken(userdata);
  if (token) {
    userdata = { ...userdata, token };
  }
  logger.info(`userdata- ${userdata}`);
  passwordMatch
    ? res
        .status(200)
        .json(formatResponse(false, 200, "Authenticated", userdata))
    : res.status(400).formatResponse(true, 400, "Authentication Failed", null);
};
module.exports = { createUser, adminLogin };

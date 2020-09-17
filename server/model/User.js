const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.Model("User", userSchema);

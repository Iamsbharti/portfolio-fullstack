const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Project", projectSchema);

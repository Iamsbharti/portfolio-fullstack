const mongoose = require("mongoose");
const Images = require("./Images");
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Images",
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

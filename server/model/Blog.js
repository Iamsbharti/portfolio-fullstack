const mongoose = require("mongoose");
const Images = require("./Images");
const blogSchema = new mongoose.Schema({
  blogId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Images",
  },
});
module.exports = mongoose.model("Blog", blogSchema);

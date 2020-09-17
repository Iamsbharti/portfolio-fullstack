const mongoose = require("mongoose");

let imagesSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Image", imagesSchema, "image.files");

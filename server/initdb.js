const mongoose = require("mongoose");
const logger = require("./library/logger");
const Grid = require("gridfs-stream");
const GridFsStorage = require("multer-gridfs-storage");
const crypto = require("crypto");
const path = require("path");
const { formatResponse } = require("./library/formatResponse");
const dotenv = require("dotenv");
const Project = require("./model/Project");

dotenv.config();
initdb = () => {
  mongoose.connect(process.env.DB_CONNECT, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("error", (error) => {
    logger.error(`Error Connencting DB: ${error.message}`);
  });
  mongoose.connection.on("open", (error) => {
    error
      ? logger.error(`Error COnenctiong DB: ${error.message}`)
      : logger.info("DB CONNECTION SUCCESS");
  });
};

/**initialize file upload func i.e. gridfs system */

let gfs;

mongoose.connection.once("open", () => {
  //init gfs stream
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
  gfs.collection("images");
});
//create storage engine
const storage = new GridFsStorage({
  url: process.env.DB_CONNECT,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buffer) => {
        if (err) {
          return reject(err);
        }
        const fileName =
          buffer.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          fileName: fileName,
          bucketName: "images",
        };
        logger.info(`File Info:${fileInfo}`);
        resolve(fileInfo);
      });
    });
  },
});

//file filter for incoming files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(formatResponse(true, 500, "File Extension Not Allowed", null), false);
  }
};
// fetch pictures
const fetchPictures = (req, res) => {
  logger.info(`Fetch Pictures${req.query.filename}`);
  gfs.files.findOne({ filename: req.query.filename }, (error, file) => {
    /**file existence */
    if (!file || file.length === 0) {
      return res
        .status(404)
        .json(formatResponse(true, 404, "File Not Found", ""));
    }
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  });
};
// find , delete image and update new one , during project update
const updatePicture = async (req, res, next) => {
  logger.info("Delete Attachment");
  let { projectId } = req.query;
  console.log("projectid:", projectId);
  // find project file
  let existingProject = await Project.findOne({
    projectId: projectId,
  });
  const filename = existingProject.image;
  let isFileDeleted = false;
  gfs.files.deleteOne({ filename: filename }, (err) => {
    if (err) {
      console.log("File Delete Error");
    } else {
      isFileDeleted = true;
      console.log("File delete success");
      next();
    }
  });
  if (isFileDeleted) {
    // upload new file
    console.log("Move to upload new pic");
  }
};
module.exports = {
  initdb,
  storage,
  fileFilter,
  fetchPictures,
  updatePicture,
};

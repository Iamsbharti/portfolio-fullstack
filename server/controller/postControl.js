const Project = require("../model/Project");
const shortid = require("shortid");
const logger = require("../library/logger");
const { formatResponse } = require("../library/formatResponse");

const createPost = async (req, res) => {
  const { name, demo, code, type, description, userId } = req.body;
  logger.info("Create Post Control");
  console.log(name, demo, code, type, description, userId);
  let newProject = new Project({
    projectId: shortid.generate(),
    name: name,
    demo: demo,
    code: code,
    type: type,
    description: description,
    userId: userId,
    image: req.file.id,
  });
  /**save new project */
  let savedProject = await Project.create(newProject);
  let project = await Project.findOne({
    projectId: savedProject.projectId,
  }).populate("image");
  if (savedProject) {
    res
      .status(200)
      .json(formatResponse(false, 200, "Project Created", project));
  } else {
    res
      .status(500)
      .json(formatResponse(true, 500, "Internal Server Error", null));
  }
};
const getProjects = async (req, res) => {
  logger.info("Get Project Control");
  Project.find()
    .populate("image")
    .lean()
    .exec((error, allBlogs) => {
      if (error) {
        res
          .status(500)
          .json(formatResponse(true, 500, "Internal Server Error", error));
      } else {
        res.status(200).json(formatResponse(false, 200, "All Blogs", allBlogs));
      }
    });
};
module.exports = {
  createPost,
  getProjects,
};

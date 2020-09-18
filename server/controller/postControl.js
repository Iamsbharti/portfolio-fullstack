const Project = require("../model/Project");
const shortid = require("shortid");
const logger = require("../library/logger");
const { formatResponse } = require("../library/formatResponse");

const createPost = async (req, res) => {
  const { name, demo, code, type, description } = req.body;
  logger.info("Create Post Control");
  let newProject = new Project({
    projectId: shortid.generate(),
    name: name,
    demo: demo,
    code: code,
    type: type,
    description: description,
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
module.exports = {
  createPost,
};

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
    image: req.file,
  });
  /**save new project */
  let savedProject = await Project.create(newProject);
  if (savedProject) {
    res
      .staus(200)
      .json(formatResponse(false, 200, "Project Created", savedProject));
  } else {
    res
      .staus(500)
      .json(formatResponse(true, 500, "Internal Server Error", null));
  }
};

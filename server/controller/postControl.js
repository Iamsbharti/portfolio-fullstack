const Project = require("../model/Project");
const shortid = require("shortid");
const logger = require("../library/logger");
const { formatResponse } = require("../library/formatResponse");
const { collection } = require("../model/Project");

const createPost = async (req, res) => {
  const { name, demo, code, type, description, userId, techstack } = req.body;
  logger.info("Create Post Control");
  console.log(type, techstack);
  let newProject = new Project({
    projectId: shortid.generate(),
    name: name,
    demo: demo,
    code: code,
    description: description,
    userId: userId,
    image: req.file.id,
  });
  /**save new project */

  let savedProject = await Project.create(newProject);
  const { projectId } = savedProject;
  // update type and techstack array
  let updateOptions = {
    $push: {
      techstack: { $each: techstack.split(",") },
      type: { $each: type.split(",") },
    },
  };

  console.log("updateoptions:", updateOptions);
  let updatedProject = await Project.updateOne(
    { projectId: projectId },
    updateOptions
  );
  const { n } = updatedProject;
  let createdProject = await Project.findOne({
    projectId: projectId,
  }).populate("image");

  if (savedProject && n === 1) {
    res
      .status(200)
      .json(formatResponse(false, 200, "Project Created", createdProject));
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
const filterNewItem = (existingArray, newArray) => {
  console.log("Filter new item::", existingArray, newArray);
  let retVal = [];
  newArray.map((content) => {
    if (!existingArray.includes(content)) {
      console.log(content, "is new item");
      retVal.push(content);
    }
  });
  console.log("new items array::", retVal);
  return retVal;
};
const updateProject = async (req, res) => {
  logger.info("Update project control");
  const {
    name,
    demo,
    code,
    type,
    description,
    userId,
    techstack,
    fileChg,
    projectId,
  } = req.body;
  let updateOptions = {};
  let existingProject = await Project.findOne({
    projectId: projectId,
  });
  console.log("ProjectIDS::", projectId);

  // upload new file
  if (fileChg) {
    console.log("file change", req.file.id);
    updateOptions = { ...updateOptions, image: req.file.id };
  }
  // filter new techstack array and type array
  let updatedTechArray = filterNewItem(
    existingProject.techstack,
    techstack.split(",")
  );
  let updatedTypeArray = filterNewItem(existingProject.type, type.split(","));
  let arrayUpdateOptions = {
    ...updateOptions,
    $push: {
      techstack: { $each: updatedTechArray },
      type: { $each: updatedTypeArray },
    },
  };
  updateOptions = {
    ...arrayUpdateOptions,
    name: name,
    demo: demo,
    code: code,
    description: description,
    userId: userId,
  };
  console.log("Final update options::", updateOptions);
  // update project
  let { n } = await Project.updateOne({ projectId: projectId }, updateOptions);
  console.log(n, "project updated");
  if (n === 1) {
    res.status(200).json(formatResponse(false, 200, "Project Updated", n));
  } else {
    res
      .status(500)
      .json(formatResponse(true, 500, "Internal Server Error", null));
  }
};
module.exports = {
  createPost,
  getProjects,
  updateProject,
};

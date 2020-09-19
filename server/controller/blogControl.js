const Blog = require("../model/Blog");
const shortid = require("shortid");
const logger = require("../library/logger");
const { formatResponse } = require("../library/formatResponse");
const { format } = require("winston");

const createBlog = async (req, res) => {
  logger.info("Create Blog Control");
  const { userId, title, link, description } = req.body;
  const newBlog = new Blog({
    blogId: shortid.generate(),
    userId: req.query.userId,
    title: title,
    link: link,
    description: description,
    image: req.file.id,
  });

  /**create blog */
  let blog;
  Blog.create(newBlog, async (error, createdBlog) => {
    console.log(error, createdBlog);
    if (error) {
      res
        .status(500)
        .json(formatResponse(true, 500, "Internal Server Error", error));
    } else {
      logger.info("populate image");
      let blogs = await Blog.findOne({ blogId: createdBlog.blogId }).populate(
        "image"
      );
      res.status(200).json(formatResponse(false, 200, "Blog Created", blogs));
    }
  });
};
const getBlogs = async (req, res) => {
  logger.info("Get All Blog Control");
  Blog.find()
    .populate("image")
    .lean()
    .exec((error, blogs) => {
      if (error) {
        res
          .status(500)
          .json(formatResponse(true, 500, "Internal Server Error", error));
      } else {
        res
          .status(200)
          .json(formatResponse(false, 200, "Blogs Fetched", blogs));
      }
    });
};
module.exports = { createBlog, getBlogs };

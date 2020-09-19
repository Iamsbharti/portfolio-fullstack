const router = require("express").Router();
const users = require("../controller/userControl");
const posts = require("../controller/postControl");
const blogs = require("../controller/blogControl");
const auth = require("../middlewares/authorization");
const db = require("../initdb");
const multer = require("multer");
const { storage } = require("../initdb");

const upload = multer({
  storage: db.storage,
  limits: 1024 * 1024 * 6,
  fileFilter: db.fileFilter,
});

/**projects route */
router.get("/portfolio/projects", auth.isAuthorized, posts.getProjects);
router.post(
  "/portfolio/createProject",
  auth.isAuthorized,
  upload.single("file"),
  posts.createPost
);

/**blogs route */
router.get("/portfolio/blogs", auth.isAuthorized, blogs.getBlogs);
router.post(
  "/portfolio/createBlog",
  auth.isAuthorized,
  upload.single("file"),
  blogs.createBlog
);

router.post("/portfolio/createUser", users.createUser);
router.get("/portfolio/login", users.adminLogin);

module.exports = router;

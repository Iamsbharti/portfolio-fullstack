const router = require("express").Router();
const users = require("../controller/userControl");
const posts = require("../controller/postControl");
const blogs = require("../controller/blogControl");
const auth = require("../middlewares/authorization");
const db = require("../initdb");
const multer = require("multer");
const { storage, fetchPictures, updatePicture } = require("../initdb");
const upload = multer({
  storage: db.storage,
  limits: 1024 * 1024 * 6,
  fileFilter: db.fileFilter,
});

/**projects route */
router.get("/portfolio/projects", posts.getProjects);
// create project
router.post(
  "/portfolio/createProject",
  auth.isAuthorized,
  upload.single("file"),
  posts.createPost
);
// update project
router.post(
  "/portfolio/updateProject/",
  auth.isAuthorized,
  upload.single("file"),
  posts.updateProject
);

/**blogs route */
router.get("/portfolio/blogs", auth.isAuthorized, blogs.getBlogs);
router.post(
  "/portfolio/createBlog",
  auth.isAuthorized,
  upload.single("file"),
  blogs.createBlog
);
/**fetch pictures */
router.get("/project/picture", fetchPictures);
//router.post("/portfolio/createUser", users.createUser);
router.post("/portfolio/login", users.adminLogin);

module.exports = router;

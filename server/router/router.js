const router = require("express").Router();
const users = require("../controller/userControl");
const posts = require("../controller/postControl");
const db = require("../initdb");
const multer = require("multer");

const upload = multer({
  storage: db.storage,
  limits: 1024 * 1024 * 6,
  fileFilter: db.fileFilter,
});
/**projects route */
//router.get("/portfolio/projects", getAllProject);
router.post(
  "/portfolio/updateProject",
  upload.single("file"),
  posts.createPost
);

/*
///Blog route
router.get("/portfolio/blogs", getAllBlogs);
router.post("/portfolio/updateBlog", updateBlog);
*/

router.post("/portfolio/createUser", users.createUser);
router.get("/portfolio/login", users.adminLogin);

module.exports = router;

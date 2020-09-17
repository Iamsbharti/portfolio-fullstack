const router = require("express").Router();

/**projects route */
router.get("/portfolio/projects", getAllProject);
router.post("/portfolio/updateProject", updateProject);

/**Blog route */
router.get("/portfolio/blogs", getAllBlogs);
router.post("/portfolio/updateBlog", updateBlog);

/**user route */
router.post("/portfolio/login", loginAdmin);

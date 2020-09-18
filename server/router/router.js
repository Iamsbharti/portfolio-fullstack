const router = require("express").Router();
const users = require("../controller/userControl");
/**projects route 
router.get("/portfolio/projects", getAllProject);
router.post("/portfolio/updateProject", updateProject);

///Blog route
router.get("/portfolio/blogs", getAllBlogs);
router.post("/portfolio/updateBlog", updateBlog);


router.post("/portfolio/login", loginAdmin);
*/
router.post("/portfolio/createUser", users.createUser);
router.post("/portfolio/login", users.adminLogin);

module.exports = router;

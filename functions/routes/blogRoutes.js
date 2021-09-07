const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.route("/create").post(blogController.createBlog);
router.route("/update").put(blogController.updateBlog);
router.route("/delete").post(blogController.deleteBlog);

module.exports = router;

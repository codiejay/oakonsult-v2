const express = require("express");
const qouteController = require("../controllers/qouteController");

const router = express.Router();

router.route("/create").post(qouteController.createQoute);
router.route("/update").put(qouteController.updateQoute);
router.route("/delete").post(qouteController.deleteQoute);

module.exports = router;

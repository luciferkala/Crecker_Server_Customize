const express = require('express');
const router = express.Router();

// router.use("/admin", require("./admin/index"))
router.use("/auth", require("./auth/index"));
router.use("/advertise", require("./advertise/index"));

module.exports = router;
const express = require("express");
const router = express.Router();
const profilesCtrl = require("../../controllers/api/profiles");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", profilesCtrl.create);

module.exports = router;

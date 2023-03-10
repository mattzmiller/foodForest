const express = require("express");
const router = express.Router();
const profilesCtrl = require("../../controllers/api/profiles");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/:id", profilesCtrl.index);
router.post("/create", profilesCtrl.create);

module.exports = router;

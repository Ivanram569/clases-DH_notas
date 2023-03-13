const express = require("express");
const genresController = require("../../controllers/api/genresController");
const router = express.Router();

router.get("/", genresController.list);
router.get("/:id", genresController.detail);
router.post("/create", genresController.create);
router.delete("/delete", genresController.destroy);

module.exports = router;

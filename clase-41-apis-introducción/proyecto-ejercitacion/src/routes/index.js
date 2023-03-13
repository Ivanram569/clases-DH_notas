var express = require("express");
var router = express.Router();

const apiGenresRouter = require("./api/genresRouter");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Digital Movies" });
});

router.use("/api/genres", apiGenresRouter);

module.exports = router;

const express = require("express");
const path = require("path");
const middleware = require("./middleware/userLog");
const mainRouter = require("./routes/main-router");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", middleware, mainRouter);

const PORT = process.env.PORT ?? 3001;
app.listen(PORT);
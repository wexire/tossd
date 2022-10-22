const { Router } = require("express");
const { createCategory } = require("../controllers/categories.js");

const categoryRouter = Router();

categoryRouter.route("/").post(createCategory);

module.exports = categoryRouter;

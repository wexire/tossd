const { Router } = require("express");
const {
  createCategory,
  getCategories,
} = require("../controllers/categories.js");

const categoryRouter = Router();

categoryRouter.route("/").post(createCategory).get(getCategories);

module.exports = categoryRouter;

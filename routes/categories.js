const { Router } = require("express");
const {
  createCategory,
  getCategories,
} = require("../controllers/categories.js");
const auth = require("../middlewares/auth.js");

const categoryRouter = Router();

categoryRouter.route("/").post(auth, createCategory).get(auth, getCategories);

module.exports = categoryRouter;

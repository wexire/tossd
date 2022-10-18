const { Router } = require("express");
const { createUser } = require("../controllers/users.js");

const userRouter = Router();

userRouter.route("/").post(createUser);

module.exports = userRouter;

const { Router } = require("express");
const { createUser, getUserRecords } = require("../controllers/users.js");

const userRouter = Router();

userRouter.route("/").post(createUser);
userRouter.route("/:id/records").get(getUserRecords);

module.exports = userRouter;

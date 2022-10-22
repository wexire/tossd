const { Router } = require("express");
const {
  createUser,
  getUserRecords,
  getUserRecordsByCategory,
} = require("../controllers/users.js");

const userRouter = Router();

userRouter.route("/").post(createUser);
userRouter.route("/:id/records").get(getUserRecords);
userRouter
  .route("/:userId/category/:categoryId/records")
  .get(getUserRecordsByCategory);

module.exports = userRouter;

const { Router } = require("express");
const {
  createUser,
  getUserRecords,
  getUserRecordsByCategory,
} = require("../controllers/users.js");
const auth = require("../middlewares/auth.js");

const userRouter = Router();

userRouter.route("/").post(auth, createUser);
userRouter.route("/:id/records").get(auth, getUserRecords);
userRouter
  .route("/:userId/records/category/:categoryId")
  .get(auth, getUserRecordsByCategory);

module.exports = userRouter;

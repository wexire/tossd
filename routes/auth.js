const { Router } = require("express");
const { signin, signup } = require("../controllers/auth.js");

const authRouter = Router();

authRouter.route("/signin").post(signin);
authRouter.route("/signup").post(signup);

module.exports = authRouter;

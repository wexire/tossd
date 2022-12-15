const { Router } = require("express");
const { createRecord } = require("../controllers/records.js");
const auth = require("../middlewares/auth.js");

const recordsRouter = Router();

recordsRouter.route("/").post(auth, createRecord);

module.exports = recordsRouter;

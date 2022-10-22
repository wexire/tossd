const { Router } = require("express");
const { createRecord } = require("../controllers/records.js");

const recordsRouter = Router();

recordsRouter.route("/").post(createRecord);

module.exports = recordsRouter;

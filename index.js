const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const userRouter = require("./routes/users.js");
const categoryRouter = require("./routes/categories.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

const DEFAULT_DB = {
  users: [],
  categories: [],
  records: [],
};

fs.writeFileSync("./database.json", JSON.stringify(DEFAULT_DB));

app.use("/users", userRouter);
app.use("/categories", categoryRouter);

app.listen(PORT, () => console.log(`App running on port ${PORT}...`));

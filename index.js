const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const userRouter = require("./routes/users.js");
const categoryRouter = require("./routes/categories.js");
const recordsRouter = require("./routes/records.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const DEFAULT_DB = {
  users: [],
  categories: [],
  records: [],
};

fs.writeFileSync("./database.json", JSON.stringify(DEFAULT_DB));

app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/records", recordsRouter);

app.listen(PORT, () => console.log(`App running on port ${PORT}...`));

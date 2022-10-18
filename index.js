const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.use("/users", userRouter);

app.listen(PORT, () => console.log(`App running on port ${PORT}...`));

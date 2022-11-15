const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const userRouter = require("./routes/users.js");
const categoryRouter = require("./routes/categories.js");
const recordsRouter = require("./routes/records.js");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/records", recordsRouter);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));

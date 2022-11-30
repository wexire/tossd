const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "User name required"] },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

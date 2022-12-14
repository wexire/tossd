const mongoose = require("mongoose");

const authUserSchema = mongoose.Schema({
  email: { type: String, required: [true, "Email required"], trim: true },
  password: {
    type: String,
    trim: true,
    validate: [validateEmail, "Invalid email address"],
    unique: true,
    required: [true, "password required"],
    min: [8, "At least 8 characters required"],
  },
});

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const authUserModel = mongoose.model("authUser", authUserSchema);

module.exports = authUserModel;

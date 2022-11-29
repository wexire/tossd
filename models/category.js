const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, required: [true, "Category name required"] },
});

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;

const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  createdAt: new Date(),
  expenses: { type: Number, required: true },
  createdAt: { type: Date, default: new Date() },
});

const recordModel = mongoose.model("record", recordSchema);

module.exports = recordModel;

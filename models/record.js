const mongoose = require("mongoose");

const recordSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
    createdAt: new Date(),
    expenses: { type: Number, required: true },
  },
  {
    timestamps: { createdAt: "createdAt" },
  }
);

const recordModel = mongoose.model("record", recordSchema);

module.exports = recordModel;

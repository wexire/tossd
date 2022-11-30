const categoryModel = require("../models/category");
const recordModel = require("../models/record");

exports.createRecord = async (req, res) => {
  try {
    const { userId, categoryId, expenses } = req.body;

    const category = await categoryModel.findById(categoryId);

    if (category.ownerId !== userId || null) throw Error("Invalid id");

    const record = await recordModel.create({
      userId,
      categoryId,
      expenses,
    });

    res.status(200).json(record);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

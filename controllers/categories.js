const categoryModel = require("../models/category");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoryModel.create({ name });

    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

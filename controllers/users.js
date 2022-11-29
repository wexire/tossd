const recordModel = require("../models/record");
const userModel = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await userModel.create({
      name,
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

exports.getUserRecords = async (req, res) => {
  try {
    const { id: userId } = req.params;

    const records = await recordModel.find({ userId });
    res.status(200).json(records);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

exports.getUserRecordsByCategory = async (req, res) => {
  try {
    const { userId, categoryId } = req.params;

    const records = await recordModel.find({
      $and: [{ userId }, { categoryId }],
    });
    res.status(200).json(records);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

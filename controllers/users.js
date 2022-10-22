const fs = require("fs");
const { v4 } = require("uuid");

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = { name, id: v4() };

    fs.readFile("./database.json", "utf-8", (err, data) => {
      if (err) new Error(err);
      const newArr = JSON.parse(data);
      newArr.users.push(user);
      fs.writeFile(
        "./database.json",
        JSON.stringify(newArr),
        (err) => new Error(err)
      );
    });

    res.status(200).send(`User ${user.name} created with id - ${user.id}.`);
  } catch (error) {
    console.log(error);
    res.status(400).send("Creation failed.");
  }
};

exports.getUserRecords = async (req, res) => {
  try {
    const { id: userId } = req.params;

    fs.readFile("./database.json", "utf-8", (err, data) => {
      if (err) new Error(err);
      const records = JSON.parse(data).records.filter(
        (record) => record.userId === userId
      );
      res.status(200).json(records);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Request failed.");
  }
};

exports.getUserRecordsByCategory = async (req, res) => {
  try {
    const { userId, categoryId } = req.params;

    fs.readFile("./database.json", "utf-8", (err, data) => {
      if (err) new Error(err);
      const records = JSON.parse(data).records.filter(
        (record) => record.userId === userId && record.categoryId === categoryId
      );
      res.status(200).json(records);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Request failed.");
  }
};

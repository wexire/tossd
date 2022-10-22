const fs = require("fs");
const { v4 } = require("uuid");

exports.createRecord = async (req, res) => {
  try {
    const { userId, categoryId, expenses } = req.body;
    const record = {
      userId,
      categoryId,
      createdAt: new Date(),
      id: v4(),
      expenses,
    };

    fs.readFile("./database.json", "utf-8", (err, data) => {
      if (err) new Error(err);
      const newArr = JSON.parse(data);
      newArr.records.push(record);
      fs.writeFile(
        "./database.json",
        JSON.stringify(newArr),
        (err) => new Error(err)
      );
    });

    res.status(200).send("Record created.");
  } catch (error) {
    console.log(error);
    res.status(400).send("Creation failed.");
  }
};

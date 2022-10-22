const fs = require("fs");
const { v4 } = require("uuid");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const user = { name, id: v4() };

    fs.readFile("./database.json", "utf-8", (err, data) => {
      if (err) new Error(err);
      const newArr = JSON.parse(data);
      newArr.categories.push(user);
      fs.writeFile(
        "./database.json",
        JSON.stringify(newArr),
        (err) => new Error(err)
      );
    });

    res.status(200).send("Category created.");
  } catch (error) {
    console.log(error);
    res.status(400).send("Creation failed.");
  }
};

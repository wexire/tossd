const fs = require("fs");
const { v4 } = require("uuid");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = { name, id: v4() };

    fs.readFile("./database.json", "utf-8", (err, data) => {
      if (err) new Error(err);
      const newArr = JSON.parse(data);
      newArr.categories.push(category);
      fs.writeFile(
        "./database.json",
        JSON.stringify(newArr),
        (err) => new Error(err)
      );
    });

    res
      .status(200)
      .send(`Category ${category.name} created with id - ${category.id}.`);
  } catch (error) {
    console.log(error);
    res.status(400).send("Creation failed.");
  }
};

exports.getCategories = async (req, res) => {
  try {
    fs.readFile("./database.json", "utf-8", (err, data) => {
      if (err) new Error(err);
      res.status(200).json(JSON.parse(data).categories);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Request failed.");
  }
};

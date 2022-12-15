const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const headerAuth = req.headers.authorization;
    if (!headerAuth) {
      res.status(400).json({
        message: "Unauthorized",
      });
    }
    const token = headerAuth.split(" ")[1];

    if (token) {
      decodedData = jwt.verify(token, process.env.JWT_KEY, (err) => {
        console.log(err);
        if (err) return next(err);
      });
      next();
    } else {
      res.status(400).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = auth;

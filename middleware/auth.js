const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, "s3cr3t");
    req.user = decoded;
    next();
  } catch (ex) {
    // console.log(ex);
    res.status(400).send("Invalid token.");
  }
};

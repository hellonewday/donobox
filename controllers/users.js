const User = require("../model/User");
const { validateLogin, validateRegister } = require("../middleware/validation");

module.exports.getUsers = (req, res, next) => {
  User.find().exec((err, doc) => {
    if (err) return res.status(400).json({ error: err });
    return res.status(200).json({ counts: doc.length, data: doc });
  });
};

module.exports.getUser = async (req, res, next) => {
  let isValid = await User.findOne({ email: req.body.email });
  if (!isValid)
    return res.status(403).json({ message: "No user found", success: false });
  User.findOne({ _id: req.params.id }).exec((err, doc) => {
    if (err) return res.status(400).json({ error: err });
    return res.status(200).json({ data: doc });
  });
};

module.exports.registerUser = async (req, res, next) => {
  // Validate user
  let isValid = await User.findOne({ email: req.body.email });
  if (isValid) return res.status(403).json({ message: "Duplicate user" });
  else return res.status(200).json({ register: "Success" });
};

module.exports.loginUser = async (req, res, next) => {
  // Validate user
  let isValid = await User.findOne({ email: req.body.email });
  if (!isValid) return res.status(403).json({ message: "No user found" });
  else return res.status(200).json({ login: "Success" });
};

module.exports.updateUser = async (req, res, next) => {
  let isValid = await User.findOne({ email: req.body.email });
  if (!isValid) return res.status(403).json({ message: "No user found" });
  else return res.status(200).json({ update: "Success" });
};

module.exports.deleteUser = async (req, res, next) => {
  let isValid = await User.findOne({ email: req.body.email });
  if (!isValid) return res.status(403).json({ message: "No user found" });
  else {
    User.findByIdAndDelete({ _id: req.params.id }).exec((error, res) => {
      if (error) return res.status(400).json({ error });
      return res.status(200).json({
        response: res,
        success: true,
      });
    });
  }
};

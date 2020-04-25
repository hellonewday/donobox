const User = require("../model/User");
const { validateRegister, validateLogin } = require("../middleware/validation");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const moment = require("moment");
const config = require("config");

moment.locale("vi");

cloudinary.config({
  cloud_name: config.get("cloud_name"),
  api_key: config.get("api_key"),
  api_secret: config.get("api_secret"),
});

module.exports.getUsers = (req, res, next) => {
  User.find()
    .populate("campaigns")
    .exec((err, doc) => {
      if (err) return res.status(400).json({ error: err });
      return res.status(200).json({
        counts: doc.length,
        data: doc.map((item) => {
          return {
            name: item.name,
            email: item.email,
            id: item._id,
            avatar: item.avatarUrl,
            campaigns: {
              counts: item.campaigns.length,
              campaign: item.campaigns.map((cam) => {
                return {
                  name: cam.name,
                  start: moment(cam.start_time).format("LL"),
                  end: moment(cam.end_time).format("LL"),
                  summary: cam.summary,
                  id: cam._id,
                  image: cam.image,
                };
              }),
            },
            created_at: moment(item.created_at).format("LL"),
          };
        }),
      });
    });
};

module.exports.getUser = async (req, res, next) => {
  let isValid = await User.findOne({ _id: req.params.id });
  if (!isValid)
    return res.status(403).json({ message: "No user found", success: false });
  User.findOne({ _id: req.params.id })
    .populate("campaigns")
    .exec((err, doc) => {
      if (err) return res.status(400).json({ error: err });
      return res.status(200).json({
        data: {
          name: doc.name,
          email: doc.email,
          id: doc._id,
          avatar: doc.avatarUrl,
          campaigns: {
            counts: doc.campaigns.length,
            campaign: doc.campaigns.map((cam) => {
              return {
                name: cam.name,
                start: moment(cam.start_time).format("LL"),
                end: moment(cam.end_time).format("LL"),
                summary: cam.summary,
                id: cam._id,
                image: cam.image,
              };
            }),
          },
          created_at: moment(doc.created_at).format("LL"),
        },
      });
    });
};

module.exports.registerUser = async (req, res, next) => {
  // Validate user
  let isValid = await User.findOne({ email: req.body.email });
  if (isValid) return res.status(403).json({ message: "Duplicate user" });
  //   else return res.status(200).json({ register: "Success" });
  let inputValidation = validateRegister(req.body);
  if (inputValidation.error)
    return res.status(400).json({
      success: false,
      response: inputValidation.error.details[0].message,
    });

  bcrypt.hash(req.body.password, 10, (error, hash) => {
    if (error) return res.status(400).json({ success: false, error });
    else {
      let avatar = gravatar.url(
        req.body.email,
        { s: "100", r: "x", d: "retro" },
        true
      );
      let data = new User({
        email: req.body.email,
        password: hash,
        avatarUrl: avatar,
        name: req.body.name,
      });
      data.save().then((response) => {
        return res.status(201).json({ success: true, response });
      });
    }
  });
};

module.exports.loginUser = async (req, res, next) => {
  // Validate user
  let isValid = await User.findOne({ email: req.body.email });
  if (!isValid) return res.status(403).json({ message: "No user found" });

  let inputValidation = validateLogin(req.body);
  if (inputValidation.error)
    return res.status(400).json({
      success: false,
      response: inputValidation.error.details[0].message,
    });
  //   else return res.status(200).json({ login: "Success" });
  bcrypt.compare(req.body.password, isValid.password, (error, success) => {
    if (error) {
      res.status(400).json({ success: false });
    } else {
      const token = jwt.sign(
        {
          _id: isValid._id,
          isAdmin: isValid.isAdmin,
          name: isValid.name,
        },
        "s3cr3t",
        {
          expiresIn: "12h",
        }
      );
      res
        .status(200)
        .json({ success: true, token, id: isValid._id, name: isValid.name });
    }
  });
};

module.exports.updateUser = async (req, res, next) => {
  let isValid = await User.findOne({ _id: req.params.id });
  if (!isValid) return res.status(403).json({ message: "No user found" });
  //   else return res.status(200).json({ update: "Success" });
  if (!req.file) {
    User.updateOne({ _id: req.params.id }, req.body).exec((error, response) => {
      if (error) return res.status(400).json({ success: false, error });
      return res.status(200).json({
        response,
        success: true,
      });
    });
  } else if (req.file) {
    const buffer = Buffer.from(req.file.buffer);
    const base64String = buffer.toString("base64");
    const input = "data:image/jpeg;base64," + base64String;
    cloudinary.uploader
      .upload(input, {
        overwrite: true,
        invalidate: true,
      })
      .then((document) => {
        User.updateOne(
          { _id: req.params.id },
          { avatarUrl: document.secure_url }
        ).exec((error, response) => {
          if (error) return res.status(400).json({ success: false, error });
          return res.status(200).json({ success: true, response });
        });
      });
  }
};

module.exports.deleteUser = async (req, res, next) => {
  let isValid = await User.findOne({ _id: req.params.id });
  if (!isValid) return res.status(403).json({ message: "No user found" });
  else {
    User.deleteOne({ _id: req.params.id }).exec((error, response) => {
      if (error) return res.status(400).json({ success: false, error });
      return res.status(200).json({
        response: response,
        success: true,
      });
    });
  }
};

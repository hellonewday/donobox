const Campaign = require("../model/Campaign");
const Comment = require("../model/Comment");
const User = require("../model/User");
const cloudinary = require("cloudinary").v2;
const config = require("config");
const moment = require("moment");

moment.locale("vi");

cloudinary.config({
  cloud_name: config.get("cloud_name"),
  api_key: config.get("api_key"),
  api_secret: config.get("api_secret"),
});

module.exports.getCams = (req, res, next) => {
  if (Object.keys(req.query).length === 0 && req.query.constructor === Object) {
    Campaign.find()
      .populate({
        path: "comments",
        select: "email name contents created_at",
      })
      .populate({
        path: "host",
        select: "email avatarUrl location name",
      })
      .exec((error, doc) => {
        if (error) return res.status(400).json({ success: false, error });
        return res.status(200).json({
          counts: res.length,
          data: doc.map((item) => {
            return {
              id: item._id,
              time: {
                start: moment(item.start_time).format("LL"),
                end: moment(item.end_time).format("LL"),
              },
              created_at: moment(item.created_at).fromNow(),
              interactions: {
                likes: item.likes,
                dislikes: item.dislikes,
                shares: item.shares,
              },
              comments: item.comments.map((comment) => {
                return {
                  id: comment._id,
                  email: comment.email,
                  name: comment.name,
                  content: comment.contents,
                  created_at: moment(comment.created_at).fromNow(),
                };
              }),
              isPublished: item.isPublished,
              name: item.name,
              summary: item.summary,
              type: item.campaign_type,
              segment: item.location_type,
              genre: item.genre,
              description: item.description,
              host: item.host,
              image: item.image,
            };
          }),
        });
      });
  } else if (req.query.city) {
    Campaign.find({ location: req.query.city })
      .populate({
        path: "comments",
        select: "email name contents created_at",
      })
      .populate({
        path: "host",
        select: "email avatarUrl location name",
      })
      .exec((error, doc) => {
        if (error) return res.status(400).json({ success: false, error });
        return res.status(200).json({
          counts: res.length,
          data: doc.map((item) => {
            return {
              id: item._id,
              time: {
                start: item.start_time,
                end: item.end_time,
              },
              created_at: moment(item.created_at).fromNow(),
              interactions: {
                likes: item.likes,
                dislikes: item.dislikes,
                shares: item.shares,
              },
              comments: item.comments.map((comment) => {
                return {
                  id: comment._id,
                  email: comment.email,
                  name: comment.name,
                  content: comment.contents,
                  created_at: moment(comment.created_at).fromNow(),
                };
              }),
              isPublished: item.isPublished,
              name: item.name,
              summary: item.summary,
              type: item.campaign_type,
              segment: item.location_type,
              genre: item.genre,
              description: item.description,
              host: item.host,
              image: item.image,
            };
          }),
        });
      });
  } else if (req.query.search) {
    Campaign.find({ name: { $regex: req.query.search, $options: "i" } })
      .populate({
        path: "comments",
        select: "email name contents created_at",
      })
      .populate({
        path: "host",
        select: "email avatarUrl location name",
      })
      .exec((error, doc) => {
        if (error) return res.status(400).json({ success: false, error });
        return res.status(200).json({
          counts: res.length,
          data: doc.map((item) => {
            return {
              id: item._id,
              created_at: moment(item.created_at).fromNow(),

              time: {
                start: item.start_time,
                end: item.end_time,
              },
              interactions: {
                likes: item.likes,
                dislikes: item.dislikes,
                shares: item.shares,
              },
              comments: item.comments.map((comment) => {
                return {
                  id: comment._id,
                  email: comment.email,
                  name: comment.name,
                  content: comment.contents,
                  created_at: moment(comment.created_at).fromNow(),
                };
              }),
              isPublished: item.isPublished,
              name: item.name,
              summary: item.summary,
              type: item.campaign_type,
              segment: item.location_type,
              genre: item.genre,
              description: item.description,
              host: item.host,
              image: item.image,
            };
          }),
        });
      });
  } else if (req.query.popular) {
    Campaign.find()
      .populate({
        path: "comments",
        select: "email name contents created_at",
      })
      .populate({
        path: "host",
        select: "email avatarUrl location name",
      })
      .limit(parseInt(req.query.popular))
      .sort({ likes: -1 })
      .exec((error, doc) => {
        if (error) return res.status(400).json({ success: false, error });
        return res.status(200).json({
          counts: res.length,
          data: doc.map((item) => {
            return {
              id: item._id,
              time: {
                start: item.start_time,
                end: item.end_time,
              },
              created_at: moment(item.created_at).fromNow(),

              interactions: {
                likes: item.likes,
                dislikes: item.dislikes,
                shares: item.shares,
              },
              comments: item.comments.map((comment) => {
                return {
                  id: comment._id,
                  email: comment.email,
                  name: comment.name,
                  content: comment.contents,
                  created_at: moment(comment.created_at).fromNow(),
                };
              }),
              isPublished: item.isPublished,
              name: item.name,
              summary: item.summary,
              type: item.campaign_type,
              segment: item.location_type,
              genre: item.genre,
              description: item.description,
              host: item.host,
              image: item.image,
            };
          }),
        });
      });
  } else if (req.query.start) {
    Campaign.find()
      .populate({
        path: "comments",
        select: "email name contents created_at",
      })
      .populate({
        path: "host",
        select: "email avatarUrl location name",
      })
      .sort({ start_time: parseInt(req.query.start) })
      .exec((error, doc) => {
        if (error) return res.status(400).json({ success: false, error });
        return res.status(200).json({
          counts: res.length,
          data: doc.map((item) => {
            return {
              id: item._id,
              time: {
                start: item.start_time,
                end: item.end_time,
              },
              created_at: moment(item.created_at).fromNow(),

              interactions: {
                likes: item.likes,
                dislikes: item.dislikes,
                shares: item.shares,
              },
              comments: item.comments.map((comment) => {
                return {
                  id: comment._id,
                  email: comment.email,
                  name: comment.name,
                  content: comment.contents,
                  created_at: moment(comment.created_at).fromNow(),
                };
              }),
              isPublished: item.isPublished,
              name: item.name,
              summary: item.summary,
              type: item.campaign_type,
              segment: item.location_type,
              genre: item.genre,
              description: item.description,
              host: item.host,
              image: item.image,
            };
          }),
        });
      });
  } else if (req.query.end) {
    Campaign.find()
      .populate({
        path: "comments",
        select: "email name contents created_at",
      })
      .populate({
        path: "host",
        select: "email avatarUrl location name",
      })
      .sort({ end_time: parseInt(req.query.end) })
      .exec((error, doc) => {
        if (error) return res.status(400).json({ success: false, error });
        return res.status(200).json({
          counts: res.length,
          data: doc.map((item) => {
            return {
              id: item._id,
              time: {
                start: item.start_time,
                end: item.end_time,
              },
              created_at: moment(item.created_at).fromNow(),

              interactions: {
                likes: item.likes,
                dislikes: item.dislikes,
                shares: item.shares,
              },
              comments: item.comments.map((comment) => {
                return {
                  id: comment._id,
                  email: comment.email,
                  name: comment.name,
                  content: comment.contents,
                  created_at: moment(comment.created_at).fromNow(),
                };
              }),
              isPublished: item.isPublished,
              name: item.name,
              summary: item.summary,
              type: item.campaign_type,
              segment: item.location_type,
              genre: item.genre,
              description: item.description,
              host: item.host,
              image: item.image,
            };
          }),
        });
      });
  }
};

module.exports.getCam = (req, res, next) => {
  Campaign.findOne({ _id: req.params.id })
    .populate({
      path: "comments",
      select: "email name contents created_at",
    })
    .populate({
      path: "host",
      select: "email avatarUrl location name",
    })
    .exec((error, doc) => {
      if (error)
        return res
          .status(400)
          .json({ success: false, message: "No campaign found", error });
      return res.status(200).json({
        data: {
          id: doc._id,
          time: {
            start: doc.start_time,
            end: doc.end_time,
          },
          created_at: moment(doc.created_at).fromNow(),
          interactions: {
            likes: doc.likes,
            dislikes: doc.dislikes,
            shares: doc.shares,
          },
          comments: doc.comments.map((comment) => {
            return {
              id: comment._id,
              email: comment.email,
              name: comment.name,
              content: comment.contents,
              created_at: moment(comment.created_at).fromNow(),
            };
          }),
          isPublished: doc.isPublished,
          name: doc.name,
          summary: doc.summary,
          type: doc.campaign_type,
          segment: doc.location_type,
          genre: doc.genre,
          description: doc.description,
          host: doc.host,
          image: doc.image,
        },
      });
    });
};

module.exports.createCam = (req, res, next) => {
  const buffer = Buffer.from(req.file.buffer);
  const base64String = buffer.toString("base64");
  const input = "data:image/jpeg;base64," + base64String;
  cloudinary.uploader
    .upload(input, {
      overwrite: true,
      invalidate: true,
    })
    .then((document) => {
      let data = new Campaign({
        name: req.body.name,
        summary: req.body.summary,
        campaign_type: req.body.campaign_type,
        genre: req.body.genre,
        end_time: req.body.end_time,
        location_type: req.body.location_type,
        location: req.body.location,
        description: req.body.description,
        host: req.user._id,
        image: document.secure_url,
      });

      data.save(async (error, response) => {
        if (error)
          return res.status(400).json({ success: false, error: error });
        else {
          let myUser = await User.findOne({ _id: req.user._id });
          myUser.campaigns.push(data._id);
          await myUser.save();
          return res.status(201).json({ response, success: true });
        }
      });
    });
};

module.exports.updateCam = async (req, res, next) => {
  let isValid = await Campaign.findOne({ _id: req.params.id });
  if (!isValid)
    return res
      .status(400)
      .json({ success: false, message: "Campaign not found" });

  if (isValid.host.toString() !== req.user._id.toString())
    return res
      .status(401)
      .json({ message: "You are not allowed to do this action" });
  if (req.file) {
    const buffer = Buffer.from(req.file.buffer);
    const base64String = buffer.toString("base64");
    const input = "data:image/jpeg;base64," + base64String;
    cloudinary.uploader
      .upload(input, {
        overwrite: true,
        invalidate: true,
      })
      .then((document) => {
        let myData = {
          name: req.body.name ? req.body.name : isValid.name,
          summary: req.body.summary ? req.body.summary : isValid.summary,
          campaign_type: req.body.campaign_type
            ? req.body.campaign_type
            : isValid.campaign_type,
          genre: req.body.genre ? req.body.genre : isValid.genre,
          end_time: req.body.end_time ? req.body.end_time : isValid.end_time,
          location_type: req.body.location_type
            ? req.body.location_type
            : isValid.location_type,
          location: req.body.location ? req.body.location : isValid.location,
          description: req.body.description
            ? req.body.description
            : isValid.description,
          image: document.secure_url,
          start_time: req.body.start_time
            ? req.body.start_time
            : isValid.start_time,
        };
        Campaign.updateOne({ _id: req.params.id }, myData).exec(
          (error, response) => {
            if (error) return res.status(400).json({ success: false, error });
            return res
              .status(200)
              .json({ success: true, response, url: myData.image });
          }
        );
      });
  } else if (!req.file) {
    Campaign.updateOne({ _id: req.params.id }, req.body).exec(
      (error, response) => {
        if (error) return res.status(400).json({ success: false, error });
        return res.status(200).json({ success: true, response });
      }
    );
  }
};

module.exports.deleteCam = async (req, res, next) => {
  let isValid = await Campaign.findOne({ _id: req.params.id });
  if (!isValid)
    return res
      .status(400)
      .json({ success: false, message: "Campaign not found" });
  if (isValid.host.toString() !== req.user._id.toString())
    return res
      .status(401)
      .json({ message: "You are not allowed to do this action" });
  Campaign.deleteOne({ _id: req.params.id }).exec(async (error, response) => {
    if (error) return res.status(400).json({ success: false, error });
    else {
      let myUser = await User.findOne({ _id: isValid.host });
      let myCams = myUser.campaigns.filter((item) => {
        return item !== req.params.id;
      });
      myUser.campaigns = myCams;
      await myUser.save();
      return res.status(200).json({ success: true, response });
    }
  });
};

module.exports.createComment = async (req, res, next) => {
  let isValid = await Campaign.findOne({ _id: req.params.id });
  if (!isValid)
    return res
      .status(400)
      .json({ success: false, message: "Campaign not found" });
  else {
    let data = new Comment({
      email: req.body.email,
      name: req.body.name,
      campaign: req.params.campaignId,
      contents: req.body.contents,
    });
    data.save(async (error, response) => {
      if (error) return res.status(400).json({ success: false, error });
      else {
        isValid.comments.push(data._id);
        await isValid.save();
        return res.status(200).json({ success: true, response });
      }
    });
  }
};

module.exports.deleteComment = async (req, res, next) => {
  let isValid = await Comment.findOne({ _id: req.params.id });
  if (!isValid)
    return res
      .status(400)
      .json({ success: false, message: "Comment not found" });
  let camValid = await Campaign.findOne({ _id: req.params.campaignId });
  if (!camValid)
    return res
      .status(400)
      .json({ success: false, message: "Campaign not found" });
  else {
    Comment.deleteOne({ _id: req.params.id }).exec(async (error, response) => {
      if (error) return res.status(400).json({ success: false, error });
      else {
        let newComments = camValid.comments.filter((item) => {
          return item !== req.params.id;
        });
        camValid.comments = newComments;
        await camValid.save();
        return res.status(200).json({ success: true, response });
      }
    });
  }
};

module.exports.getComments = async (req, res, next) => {
  let isValid = await Campaign.findOne({ _id: req.params.id });
  if (!isValid)
    return res
      .status(400)
      .json({ success: false, message: "Campaign not found" });
  Comment.find().exec((error, document) => {
    if (error) return res.status(400).json({ success: false, error });
    return res.status(200).json({
      counts: document.length,
      data: document,
    });
  });
};

// Consider!

module.exports.createReply = (req, res, next) => {};

module.exports.deleteReply = (req, res, next) => {};

module.exports.getReply = (req, res, next) => {};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    // Tên doanh nghiệp
    name: {
      type: String,
      required: true,
      trim: true,
      min: 3,
    },
    // Email
    email: {
      type: String,
      required: true,
      trim: true,
    },
    // Mật khẩu
    password: {
      type: String,
      required: true,
    },
    // Ảnh đại diện
    avatarUrl: {
      type: String,
      required: true,
    },
    // Địa điểm
    location: {
      type: String,
      trim: true,
    },
    // Website
    website: {
      type: String,
      trim: true,
    },
    // Mô tả doanh nghiệp
    description: {
      type: String,
      trim: true,
      min: 10,
    },
    // Số điện thoại
    phoneNumber: {
      type: String,
      trim: true,
      min: 10,
    },
    // Tổng hợp các chiến dịch
    campaigns: [
      {
        type: Schema.Types.ObjectId,
        ref: "Campaign",
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", UserSchema);

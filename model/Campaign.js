const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
  name: {
    // Tên chiến dịch
    type: String,
    required: true,
    min: 3,
  },
  description: {
    // Mô tả chi tiết
    type: String,
    required: true,
    min: 20,
  },
  summary: {
    // Tóm tắt
    type: String,
    required: true,
    min: 10,
    max: 30,
  },
  campaign_type: {
    // Loại chiến dịch
    type: String,
    enum: ["Từ thiện", "Hỗ trợ nhà nước"],
  },
  genre: {
    // Nó hỗ trợ gì
    type: String,
    enum: ["Lương thực", "Kinh tế", "Việc làm", "Sản phẩm", "Giáo dục"],
  },
  start_time: {
    // Thời gian bắt đầu, mặc địch là bây giờ
    type: Date,
    default: Date.now(),
  },
  end_time: {
    // Thời gian kết thúc
    type: Date,
  },
  location_type: {
    // Loại địa điểm
    type: String,
    required: true,
    enum: ["Toàn quốc", "Vùng miền", "Toàn cầu", "Thành phố"],
  },
  location: {
    // Địa điểm cụ thể, nếu là toàn quốc hoặc toàn cầu thì không cần.
    type: String,
    required: false,
  },
  // Tương tác
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  shares: {
    type: Number,
    default: 0,
  },
  // Relational Schemas
  // Bình luận
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  // Đơn vị tổ chức
  host: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Campaign", CampaignSchema);

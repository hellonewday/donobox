const router = require("express").Router();
const campaigns = require("../controllers/campaigns");
const multer = require("multer");
const auth = require("../middleware/auth");

const uploads = multer({
  storage: multer.memoryStorage(),
  limits: 10 * 1024 * 1024,
});

router.get("/", campaigns.getCams);
router.get("/:id", campaigns.getCam);
router.post("/", auth, uploads.single("picture"), campaigns.createCam);
router.patch("/:id",auth, uploads.single("picture"), campaigns.updateCam);
router.delete("/:id", auth, campaigns.deleteCam);
router.get("/:id/comments", campaigns.getComments);
router.post("/:id/comments", campaigns.createComment);
router.delete("/:campaignId/comments/:id", campaigns.deleteComment);

module.exports = router;

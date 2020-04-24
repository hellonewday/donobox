const router = require("express").Router();
const users = require("../controllers/users");
const multer = require("multer");

const uploads = multer({
  storage: multer.memoryStorage(),
  limits: 10 * 1024 * 1024,
});

router.get("/", users.getUsers);
router.get("/:id", users.getUser);
router.post("/register", users.registerUser);
router.post("/login", users.loginUser);
router.patch("/:id", uploads.single("avatar"), users.updateUser);
router.delete("/:id", users.deleteUser);

module.exports = router;

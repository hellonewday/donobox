const router = require("express").Router();
const users = require("../controllers/users");

router.get("/", users.getUsers);
router.get("/:id", users.getUser);
router.post("/register", users.registerUser);
router.post("/login", users.loginUser);
router.patch("/:id", users.updateUser);
router.delete("/:id", users.deleteUser);

module.exports = router;

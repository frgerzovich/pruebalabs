const router = require("express").Router();
const userController = require("./userController");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.postUser);

module.exports = router;

const userService = require("./userService");

const getUsers = (req, res) => {
  console.log(req.query.id);
  const users = userService.getUsers();
  res.json(users);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const user = userService.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

const postUser = (req, res) => {
  const user = req.body;
  const newUserId = userService.createUser(user);
  return res.status(200).json({ newUserId });
};

module.exports = { getUsers, getUserById, postUser };

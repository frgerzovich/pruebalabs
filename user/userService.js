const { unlock } = require("./userRouter");

const users = [
  {
    id: 1,
    name: "Juamba",
    age: 18,
    email: "juamba@puto.com",
  },
  {
    id: 2,
    name: "Dugus",
    age: 10,
    email: "dugus@puto.com",
  },
  {
    id: 3,
    name: "ivys",
    age: 86,
    email: "ivys@puto.com",
  },
  {
    id: 4,
    name: "isa",
    age: 8,
    email: "isabelo@puto.com",
  },
];

const getUsers = () => {
  return users;
};
const getUserById = (id) => {
  const user = users.find((user) => user.id === Number(id));
  console.log(user);
  return user;
};

const createUser = (user) => {
  const id = users[users.length - 1].id + 1;
  const newUser = {
    id: id,
    ...user,
  };
  users.push(newUser);
  return id;
};
module.exports = { getUsers, getUserById, createUser };

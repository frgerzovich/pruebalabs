const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const userRouter = require("./user/userRouter");

router.get("/holamundo", (req, res) => {
  res.send("Hola mundo hace mucho no hago un hola mundo :0");
});

app.use(express.json());
app.use("/", router);
app.use("/users", userRouter);
app.listen(port, () => console.log("server listening on port " + port));

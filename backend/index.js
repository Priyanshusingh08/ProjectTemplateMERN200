const express = require("express");
const userRouter = require("./routers/userRouter");
const utilRouter = require("./routers/util");
const slotRouter = require("./routers/slotRouter");
const ownerRouter = require("./routers/ownerRouter");
const bookRouter = require("./routers/bookRouter");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/util", utilRouter);
app.use("/slot", slotRouter);
app.use("/owner", ownerRouter);
app.use("/book", bookRouter);
app.use(express.static("./static"));
app.get("/", (req, res) => {
  res.send("you got a response");
});

app.get("/home", (req, res) => {
  res.send("you have reached home");
});

app.get("*", (req, res) => {});

app.listen(port, () => {
  console.log("server started");
});

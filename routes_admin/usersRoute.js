const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const User = require("../models/Users.model");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 25 * 60 * 1000, // 15 minutes
  max: 25, // limit each IP to 25 requests per windowMs
});

router.get("/new", limiter, async (req, res) => {
  let users = await User.find({ verified: false }, { password: 0 });
  res.json(users);
});

router.get("/verified", limiter, async (req, res) => {
  let users = await User.find({verified: true}, { password: 0 });
  res.json(users);
});

router.get("/accept/:id", limiter, async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { verified: true });
  let users = await User.find({}, { password: 0 });
  res.json(users);
});

router.get("/remove/:id", limiter, async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, { verified: false });
  let users = await User.find({}, { password: 0 });
  res.json(users);
});

module.exports = router;

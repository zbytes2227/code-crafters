const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Notice = require("../models/Notices.model");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 25 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 5 requests per windowMs
});

router.post("/",limiter, async (req, res) => {
  try {
    const newUpdate = new Notice({
      title: req.body.Notice_title,
      link: req.body.Notice_link,
      src: req.body.Notice_src,
    });

    await newUpdate.save();
    res.json({ success: true, msg: "Congrats! New Update Created.." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

router.delete("/", async (req, res) => {
  // let daca = await Notice.find({});
  const deletedNotice = await Notice.findOneAndDelete({
    _id: req.body.notice_id,
  });
  res.json(deletedNotice);
});

router.get("/", async (req, res) => {
  let data = await Notice.find({});
  res.json(data);
});

module.exports = router;

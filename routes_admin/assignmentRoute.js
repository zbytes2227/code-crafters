const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const Assignment = require("../models/Assignments.model");
const cors = require("cors");
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





router.post("/new", async (req, res) => {
  try {
    // if (req.body.message.length > 2500) {
    //   return res.status(400).json({
    //     success: false,
    //     msg: "Message should not be more than 2500 words",
    //   });
    // }

    const newAssg = new Assignment({
      name: req.body.name,
      topic: req.body.topic,
      due: req.body.due,
    });

    await newAssg.save();
    res.json({ success: true, msg: "New Assignment Submitted !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

router.get("/", limiter, async (req, res) => {
  let assignment = await Assignment.find({});
  res.json(assignment);
});


router.delete("/", async (req, res) => {
  // let daca = await Notice.find({});
  const deletedAssg = await Assignment.findOneAndDelete({
    _id: req.body.Assignment_id,
  });
  res.json(deletedAssg);
});

module.exports = router;

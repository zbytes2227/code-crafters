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

router.get("/", limiter, async (req, res) => {
  let assignment = await Assignment.find({});
  res.json(assignment);
});

router.post("/submit", async (req, res) => {
  const assignmentId = req.body.assignment_id;
  const userId = req.body.user_id;

  try {
    const assignment = await Assignment.findOneAndUpdate(
      { _id: assignmentId },
      { $push: { submitted: userId } },
      { new: true }
    );
    assignment.save();
    if (!assignment) {
      return res.status(404).send("Assignment not found");
    }

    res.send(assignment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});


router.get("/:id", limiter, async (req, res) => {
  const { id } = req.params;
  let assignment = await Assignment.findById(id);
  res.json(assignment);
});


router.post("/status", limiter, async (req, res) => {
  const { user_id } = req.body;

  let assignments = await Assignment.find({ submitted: user_id });
  res.json(assignments);
});


module.exports = router;

const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const Query = require("../models/Query.model");
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
  let query = await Query.find({});
  res.json(query);
});


router.get("/:id", limiter, async (req, res) => {
  const { id } = req.params;
  let query = await Query.findById(id);
  res.json(query);
});


module.exports = router;

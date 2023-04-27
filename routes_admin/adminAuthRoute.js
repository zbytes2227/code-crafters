const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const admin_auth = require('../functions/admin_auth')

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


router.post("/login",limiter, async (req, res) => {
  try {
    if (
      req.body.username === process.env.ADMINUSERNAME &&
      req.body.password === process.env.ADMINUSERKEY
    ) {
      const token = jwt.sign({ _id: "user._id" }, process.env.ADMIN_JWT, {
        expiresIn: "1h",
      });
      return res
        .cookie("admin_auth_token", token, {
          httpOnly: true,
          sameSite: "strict", 
          secure: true, 
        })
        .json({
          success: true,
          msg: "admin Authenticated & Token Generated",
        });
    } else {
      res.json({ success: false, msg: "Un-Authorized !" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const isAuthenticated = await admin_auth(req, res);
  res.json({ user_valid: isAuthenticated.verified });
});

router.post("/logout", async (req, res) => {
  // clear the access_token cookie
  res.clearCookie("admin_auth_token", {
    httpOnly: true,
    sameSite: "strict",
  });
  // return a response indicating successful logout
  res.json({ success: true, msg: "Logout Successful" });
});

module.exports = router;

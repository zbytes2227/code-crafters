const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const QuerySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { collection: "user-Query" }
);

const Query = mongoose.model("Query", QuerySchema);
module.exports = Query;
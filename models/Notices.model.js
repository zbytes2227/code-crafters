const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const NoticeSchema = new mongoose.Schema({
  title: { type: String, required: true},
  link: { type: Boolean},
  src: { type: String},
},
{collection:"my-notices"}
);


const Notice = mongoose.model("notices", NoticeSchema)
module.exports = Notice
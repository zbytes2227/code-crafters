const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const Assignmentschema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    topic: { type: String, required: true },
    submitted: {type: Array},
    due: { type: Date, required: true },
    date: { type: Date,default: Date.now}
},
    { collection: "my-Assignments" }
);

const Assignment = mongoose.model("Assignment", Assignmentschema)
module.exports = Assignment
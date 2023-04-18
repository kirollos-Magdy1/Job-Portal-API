const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  hr: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    unique: [true, "hr exists"],
  },
  name: {
    type: String,
  },
  companyWebsite: {
    type: String,
  },
  companyLocation: {
    type: String,
    // required: [true, 'Please provide company location'],
  },
  numberOfEmployees: {
    type: Number,
    // required: [true, 'Please provide number of employees'],
  },
  companyDescription: {
    type: String,
    // required: [true, 'Please provide company description']
  },
});

module.exports = mongoose.model("Company", companySchema);
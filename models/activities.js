const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Activity = mongoose.model("activities", activitySchema);

module.exports = Activity;

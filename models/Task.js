const mongoose = require("mongoose");

/*
NOTE: Which ever properties are specified in Schema are added to database others are simply ignored
Try for TaskSchema this json 
{
    "name":"second task",
    "completed":false,
    "random":"ramdom",
    "amount":4
}
ans see result in postman
*/

const TaskSchema = mongoose.Schema({
  // Without validations
  /**
    name: String,
    completed: Boolean,
     */
  // With validations
  name: {
    type: String,
    required: [true, "This field can not be empty."],
    trim: true,
    maxlength: [20, "It should not be greater than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);

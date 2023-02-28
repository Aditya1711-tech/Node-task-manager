const mongoose = require("mongoose");

// const ConnectionString =
//   "mongodb+srv://aditya:aditya@cluster0.jkxmft9.mongodb.net/Node-Task-Manager?retryWrites=true&w=majority";

// When we start app it should firt connect to the databse if it fails to do it the app should crash this part of code is for that perpous
const connectDB = (uri) => {
  mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
module.exports = connectDB
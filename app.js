const { json } = require("express");
const express = require("express");
var app = express();
const tasks = require("./routes/tasks");
const port = 8001;
const connectDB = require("./db/connection");
require("dotenv").config();

// Middlwares
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')         -Get all the tasks
// app.post('/api/v1/tasks')        -create new task
// app.get('/api/v1/tasks/:id')     -Get single task
// app.patch('/api/v1/tasks/:id')   -Update single task
// app.delete('/api/v1/tasks/:id')  -delete a task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(
      port,
      console.log(`Aditya\nServer is listening on port: ${port}`)
    );
  } catch (error) {
    // console.log("Success");
    console.log(error);
  }
};
start();

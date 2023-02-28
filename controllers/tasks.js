const Task = require("../models/Task");
const Tasks = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ tasks });
  }
};

const getIncompletedTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ completed: false });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
  // console.log("Got all thasks");
  // res.send("got all the incompleted tasks");
};

const createTask = async (req, res) => {
  // Whithout handeled exceptions
  /*
    const task = await Task.create(req.body);
    res.status(201).json({ task });
     */
  // Wxception handeled using try and catch blocks
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `No task available with this id ${taskID}` });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `No task available with this id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  //   res.send("Update task");
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `No task available with this id ${taskID}` });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
  getIncompletedTasks,
};

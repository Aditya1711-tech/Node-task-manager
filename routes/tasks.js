const express = require("express");
const { get } = require("mongoose");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
  getIncompletedTasks,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/incomplete").get(getIncompletedTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

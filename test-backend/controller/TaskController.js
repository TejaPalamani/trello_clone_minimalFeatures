const Task = require('../models/taskSchema');

//user create , get all , get by id, delete by id

const CreateTask = async (req, res) => {
  try {
    const { id, email } = req.payload;
    const { title, status, description, priority, deadline } = req.body;
    if (!title || !status) {
      res.status(400).json({ error: 'Status and Title fileds are required!' });
    } else {
      const createTask = await Task.create({
        title,
        description,
        status,
        priority,
        deadline,
        user_id: id,
      });
      res.status(201).json({ mesg: 'Ur task Created..', data: createTask });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Server error.');
  }
};

//get all task that is under user

const GetAllTasks = async (req, res) => {
  try {
    const { id, email } = req.payload;

    const tasks = await Task.find({ user_id: id });

    if (tasks.length === 0) {
      return res.status(200).send({ mesg: 'No tasks found for this user.' });
    }

    res.status(200).json(tasks);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server error.');
  }
};

//finding and updating

const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).send('Task not found.');
    }

    res.status(200).json(updatedTask);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server error.');
  }
};

//finding and deleting

const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).send('Task not found.');
    }

    res.status(200).json({ message: 'Task successfully deleted.' });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server error.');
  }
};

module.exports = { CreateTask, updateTaskById, deleteTaskById, GetAllTasks };

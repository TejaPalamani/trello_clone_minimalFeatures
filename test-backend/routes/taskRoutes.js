const express = require('express');
const {
  CreateTask,
  GetAllTasks,
  updateTaskById,
  deleteTaskById,
} = require('../controller/TaskController');

const validation = require('../middleWare/validation');

const router = express.Router();

router.use(validation);

router.post('/task', CreateTask);
router.get('/task', GetAllTasks);
router.put('/task/:id', updateTaskById);
router.delete('/task/:id', deleteTaskById);

//router.post('/user/signin', LoginUser);

module.exports = router;

const mongoose = require('mongoose');
const userSchema = require('./userSchema');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title Required!'],
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      required: [true, 'Status field is required!'],
    },
    priority: {
      type: String,
      required: true,
      default: 'Low',
    },
    deadline: {
      type: String,
      default: '',
    },

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);

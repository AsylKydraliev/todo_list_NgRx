const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    user: String,
    text: {
        required: true,
        type: String
    },
    status: {
        type: String
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
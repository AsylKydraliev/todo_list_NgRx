const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    text: {
        required: true,
        type: String
    },
    status: String
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
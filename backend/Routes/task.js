const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        if(!req.body.text){
            res.status(400).send({error: 'Task text is required'});
        }

        const taskObj = {
            text: req.body.text,
            user: null,
            status: 'new'
        }

        if(req.body.user){
            taskObj.user = req.body.user;
        }

        const task = new Task(taskObj);
        await task.save();

        return res.send(task);
    }catch (e){
        next(e);
    }
});

router.get('/', async (req, res, next) => {
    try{
        const tasks = await Task.find().populate('user', 'name');

        return res.send(tasks);
    }catch (e){
        next(e);
    }
});


module.exports = router;
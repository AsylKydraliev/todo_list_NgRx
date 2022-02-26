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

router.put('/:id', async (req, res, next) => {
    try{
        const newTask = {
            user: req.body.user,
            status: req.body.status
        };

        const task1 = new Task(newTask);
        await task1.save();

        return res.send(task1);
    }catch (e){
        next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    try{
        const task = await Task.deleteOne({_id: req.params.id});

        return res.send(task);
    }catch (e){
        next(e);
    }
});

module.exports = router;
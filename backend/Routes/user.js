const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        if(!req.body.name){
            res.status(400).send({error: 'Name is required'});
        }

        const userObj = {
            name: req.body.name
        }

        const user = new User(userObj);
        await user.save();

        return res.send(user);
    }catch (e){
        next(e);
    }
})
module.exports = router;
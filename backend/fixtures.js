const mongoose = require('mongoose');
const config = require("./config");
const Task = require("./models/Task");
const User = require("./models/User");

const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [John, Jack, Jane] = await User.create({
        name: 'John',
    }, {
        name: 'Jack',
    }, {
        name: 'Jane',
    });

     await Task.create({
         user: John,
         text: 'Create new task',
         status: 'new'
    }, {
         user: Jack,
         text: 'Something task',
         status: 'new'
    }, {
         user: Jane,
         text: 'New task',
         status: 'new'
    });

    await mongoose.connection.close();
};

run().catch(e => console.error(e));
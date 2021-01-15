const express = require('express');
require('./db/mongoose.js');
const userRouter = require('./routes/users.routes');
const tasksRouter = require('./routes/tasks.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(tasksRouter);

app.listen(port, () => {
    console.log('Server started on port:' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
// //     const task = await Task.findById('6000c5ccc797231b1ce4e7a0');
// //     await task.populate('owner').execPopulate();
// //     console.log(task.owner);
//     const user = await User.findById('6000c584c797231b1ce4e79d');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks)

// }

// main();
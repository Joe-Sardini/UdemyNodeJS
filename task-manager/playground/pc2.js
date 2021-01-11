require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5ffb52ac9e39e0327c89cc7c').then(() => {
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e)
})
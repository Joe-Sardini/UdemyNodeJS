require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ffb52ac9e39e0327c89cc7c').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e)
// });

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5ffb500393cfa23a98a3ed8f').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
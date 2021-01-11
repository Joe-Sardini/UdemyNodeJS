require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5ffb462bbde88f0a8cbefae6', { age: 0 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age:0 })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e)
});

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('5ffb51615749cd30081b14dc', 1).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
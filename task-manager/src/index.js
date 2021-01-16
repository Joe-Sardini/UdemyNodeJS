const express = require('express');
require('./db/mongoose.js');
const userRouter = require('./routes/users.routes');
const tasksRouter = require('./routes/tasks.routes');

const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer');
const upload = multer({
    dest: 'avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload an image.')); 
        }

        cb(undefined, true);
        // cb(new Error('File must be a PDF'));
        // cb(undefined, false);
        // cb(undefined, true);
    }
});

app.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
    res.send()
});

app.use(express.json());
app.use(userRouter);
app.use(tasksRouter);

app.listen(port, () => {
    console.log('Server started on port:' + port);
});
const express = require('express');
const app = express();
const port = 3100;
const readTodoRecords = require('./services/todoServices');
const allowOrigin = require('./middleware/origin');

const result = {
    data: [
        { id: 1, title: 'task 1', description: 'this is task 1', dueDate: new Date('01/01/2019') },
        { id: 2, title: 'task 2', description: 'this is task 2', dueDate: new Date('01/01/2019') },
        { id: 3, title: 'task 3', description: 'this is task 3', dueDate: new Date('01/01/2019') }
    ]
};

app.use(allowOrigin);

app.get('/api/todo', (req, res) => {
    // readTodoRecords()
    //     .then(result => {
    //     })
    //     .catch((error) => console.log('error', error));
    res.send(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
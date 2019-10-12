const express = require('express');
const app = express();
const port = 3100;
const readTodoRecords = require('./services/todoServices');
const allowOrigin = require('./middleware/origin');
var bodyParser = require("body-parser");

const result = {
    data: [
        { id: 1, title: 'task 1', description: 'this is task 1', dueDate: new Date('01/01/2019') },
        { id: 2, title: 'task 2', description: 'this is task 2', dueDate: new Date('01/01/2019') },
        { id: 3, title: 'task 3', description: 'this is task 3', dueDate: new Date('01/01/2019') }
    ]
};

app.use(allowOrigin);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/todo', (req, res) => {
    res.send(result);
});

app.post('/api/todo', (req, res) => {
    const todo = req.body;
    console.log(todo);
    todo.id = 4;
    res.send(todo);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
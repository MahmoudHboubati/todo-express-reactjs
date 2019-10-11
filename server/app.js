const express = require('express');
const app = express();
const port = 3100;
const readTodoRecords = require('./services/todoServices');

app.get('/api/todo', (req, res) => {
    readTodoRecords()
        .then(result => {
            res.send(result);
        })
        .catch((error) => console.log('error', error));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
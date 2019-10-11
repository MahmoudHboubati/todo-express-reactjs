const sqlite3 = require('sqlite3').verbose();

var MongoClient = require('mongodb').MongoClient;

// Connect to the db

MongoClient.connect("mongodb://localhost:27017/playground", { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) console.error(err);

    let collection = client.db('playground').collection('todos');

    collection.count(function (err, count) {
        if (err) throw err;

        else if (count === 0) {
            collection.insert({ id: 1, title: 'task 1', description: 'description' });
            collection.insert({ id: 2, title: 'task 2', description: 'description' });
            collection.insert({ id: 3, title: 'task 3', description: 'description' });
        }
    });
});

var readTodoRecords = function () {
    return new Promise(function (resolve, reject) {

        MongoClient.connect("mongodb://localhost:27017/playground", { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) console.error(err);

            let collection = client.db('playground').collection('todos');

            collection.find().toArray(function (err, items) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(items);
                }
            });
        });
    });
}

module.exports = readTodoRecords;
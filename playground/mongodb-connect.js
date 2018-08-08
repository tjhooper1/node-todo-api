const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('There was an error connecting');
        
    }
    console.log('connected to Mongo server');

    // db.collection('Todos').insertOne({
    //     text: 'Somethin to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log('unable to insert todo', err);
            
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // });

    db.collection('Users').insertOne({
        name: 'Tj',
        age: 30,
        location: 'USA'
    }, (err, results) => {
        if (err) {
            return console.log('something is wrong');
            
        }
        console.log(JSON.stringify(results.ops, undefined, 2));
        
    });

    db.close();
});
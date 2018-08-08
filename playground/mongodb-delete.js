const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
        
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
        
    // });

    db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
        console.log(result);
        
    })

    // db.close();

});


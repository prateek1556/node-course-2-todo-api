const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }
    
    console.log('Connected to MongoDb server');
    
    db.collection ('Todos').insertOne({
        text: 'Something to do',
        completed: false
    },(err,result) => {
        if(err){
            return console.log('Unable to insert',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    
    db.close();
});
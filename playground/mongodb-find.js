//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }
    
    console.log('Connected to MongoDb server');
    
/*    db.collection('Todos').find({
        _id: new ObjectID('5a9edb1dcec05e3264c51578')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to fetch todos',err);
    }); */
    
    db.collection('Todos').find().count().then((count) => {
        console.log('Todos');
        console.log(`Todos count: ${count}`);
    },(err) => {
        console.log('Unable to fetch todos',err);
    });
   
   // db.close();
});
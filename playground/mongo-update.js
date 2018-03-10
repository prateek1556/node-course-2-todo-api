//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        return console.log('Unable to connect to mongoDB server');
    }
    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5aa3871578ba3952a051786a')
    },{
        $set:{
        completed: true
    }
    },{
        returnOriginal: false                                    
    }).then((result) => {
        console.log(result);
    });
    
    //console.log('Connected to MongoDb server');
    
    
   // db.close();
});
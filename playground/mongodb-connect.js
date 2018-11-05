//const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
    if(err){
        return console.log('Cannot connect to MongoDB server');
    }else{
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');
        db.collection('Users').insertMany([{
            name: 'Chien',
            age: 25,
            location: 'IL'
        },{
            name: 'Hung',
            age: 29,
            location: 'IL'
        },{
            name: 'Huy',
            age: 26,
            location: 'IL'
        }],(err,result) => {
            if(err){
                return console.log('cannot insert');
            }
            console.log(JSON.stringify(result.ops, undefined , 2));
        });

        client.close();
    }
})


/*
db.collection('Todos').insertOne({
            test: 'Something here',
            completed: false
        },(err,result) =>{
            if(err){
                return console.log('Cannot insert');
            }
            console.log(JSON.stringify(result.ops, undefined , 2));
        });


*/
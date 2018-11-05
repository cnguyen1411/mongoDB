//const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
    if(err){
        return console.log('Cannot connect to MongoDB server');
    }else{
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        //detele many
        /*
        db.collection('Users').deleteMany({name: 'Chien'}).then((result) => {
            console.log(result);
        });
        */

        //delete one
        /*
        db.collection('Users').deleteMany({name: 'Hung'}).then((result) => {
            console.log(result);
        });
        */

        //find and delete
        /*
        db.collection('Users').findOneAndDelete({name: 'Huy'}).then((result) => {
            console.log(result);
        });
        */
        db.collection('Users').deleteMany({name: 'Chien'});
        /*db.collection('Users').findOneAndDelete({
            _id: new ObjectID("5bdf45a112f8ae545cb26bff")
        }).then((results) => {
            console.log(JSON.stringify(results,undefined,2));
        });*/
        client.close();
    }
})


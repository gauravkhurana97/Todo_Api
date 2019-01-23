const {MongoClient,ObjectID} = require("mongodb");


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
        return console.log("unable to connect to server");
    }

//     db.collection("Todos").find().toArray().then((docs)=>{
//         console.log(JSON.stringify(docs,undefined,2));
//     },(err)=>{
//         console.log("err");
//     });

        db.collection("Todos").find({_id:new ObjectID("5c488cd2efa0ec135481735d")}).toArray().then((docs)=>{
            console.log(JSON.stringify(docs,undefined,2));
        },(err)=>{
            console.log("err");
        });
  
        // db.collection("Todos").find().count().then((count)=>{
        //     console.log(count);
        // })


        
db.close();
})


    
    

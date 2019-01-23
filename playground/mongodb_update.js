const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
    return console.log("unable to connect to server");
}

db.collection("Todos").findOneAndUpdate({_id:new ObjectID("5c4898e05b03fd6fc3069292")},{
    $set:{
        completed:"true"
    }
},{returnOriginal:"false"})
}).then((res)=>{
    console.log(res);
});
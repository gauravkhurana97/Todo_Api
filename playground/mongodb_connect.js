const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
    return console.log("unable to connect to server");
    }

    db.collection("Todos").insertOne({
        text:"something to do",
        completed:"false"
    },(err,res)=>{

        if(err){
            return ;
        }
        
       console.log(JSON.stringify(res.ops,undefined,2));
       //ops attr store all of the docs that has been inserted 
    })

    db.collection("Users").insertOne({
        name:"gaurav khurana",
        
    },(err,res)=>{
        if(err){
            return  console.log("unable to connect to server");
        }
        console.log(JSON.stringify(res.ops,undefined,2));

    })

    console.log("connected to mongodb server");
    db.close();
})
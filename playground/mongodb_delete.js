const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
    return console.log("unable to connect to server");
}
    // db.collection("Todos").deleteMany({
    //     completed:"false"
    // }).then((res)=>{
    //     console.log(res);
    // });

    db.collection("Todos").deleteOne({text:"gaurav_khurana"});

    db.collection("Todos").findOneAndDelete({text:"eating"}).then((res)=>{
        console.log(res);
    })

db.close();
})
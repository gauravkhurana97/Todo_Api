//Library module
var express = require("express");
var bodyParser = require("body-parser");

//it takes the string body and convert it into json format


//Local module
const {mongoose} = require("./db/mongoose")
const {Todo} = require("./models/Todo");
const {User} = require("./models/User");

//server.js file is only responsible for routes


var app = express();

//middleware
app.use(bodyParser.json())

//For creating a new todo
app.post("/todos",(req,res)=>{

    var new_Todo = new Todo({
        text:req.body.text
    })



    new_Todo.save().then((doc)=>{
        res.send(JSON.stringify(doc,undefined,2));
    },(e)=>{
        res.status(400).send(e);
    })

    //when we have to create a todo we send the request to the server
    //server take the request then  make the model and send the complete model back to client
})





app.listen(3000,()=>{
    console.log("started on port 3000")
});

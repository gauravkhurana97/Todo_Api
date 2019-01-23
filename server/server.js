var mongoose = require("mongoose");

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo",{
     text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
    default:false
    },
    completedAt:
    {
        type:Number
    }
})


var User = mongoose.model("User",{
    email:{
        type:String,
        require:true,
        minlength:6,
        trim:true
    }
})



var new_user = new User({
    email:"gauravkhuran154@gmail.com"
});

new_user.save();

var newTodo = new Todo({
    text:"Morning Walk        "
})


newTodo.save().then((res)=>{
console.log(res)
},(err)=>{
    console.log(err)
});

// var otherTodo= new Todo({
//     text:"Cook dinner",
//     completed:"false",
//     completedAt:new Date().getTime()
// })


// otherTodo.save();


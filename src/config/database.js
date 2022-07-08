const mongoose=require('mongoose');
const connect=()=>{
    console.log("Mongodb connection requested");
    return mongoose.connect('mongodb://localhost:27017/project');
}
module.exports={
    connect
}
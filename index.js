const express=require("express");
const bodyParser=require('body-parser');
const passport=require('passport');

const {connect}=require("./src/config/database");
const apiRouter=require("./src/routes/index");
const User=require("./src/models/user");
require('./src/utils/auth');
const authRouter=require("./src/routes/authRoute");
const app=express();
app.use("/",authRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api",passport.authenticate('jwt',{session:false}),apiRouter);
/*app.use(function(err,req,res,next){
    res.status(err.status||500);
    res.json({
        success:false,
        error:err
    });
})
*/

app.listen(3000,async ()=>{
    await connect();
    console.log("Mongodb connected successfully");
    console.log("Server started successfully");
    
});
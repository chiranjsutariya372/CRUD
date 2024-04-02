const mongoose= require('mongoose');
const userSchema=mongoose.Schema({
    Name:String,
    email:String,
    phone:Number,
    image:String,
})
const user=mongoose.model("CRUD",userSchema)
module.exports=user
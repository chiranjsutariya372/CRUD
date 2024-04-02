const mongoose= require("mongoose")
const db=async()=>{
        await mongoose.connect("mongodb+srv://chiranjsutariya372:chiranj@cluster0.vzywpba.mongodb.net/?retryWrites=true&w=majority")
        console.log("connect to mongodb");
}
module.exports=db;
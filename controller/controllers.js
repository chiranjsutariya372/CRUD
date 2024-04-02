const user = require("../model/Schema")
const signup=async(req,res)=>{
   let create=await user.create(req.body)
   res.send(create)
}
const read=async(req,res)=>{
   let read=await user.findOne(req.body)
   res.send(read)
}
const update=async(req,res)=>{
   let update=await user.findByIdAndUpdate(req.params.id,req.body)
   res.send(update)
}
const  delet=async(req,res)=>{
   let delet=await user.findByIdAndDelete(req.params.id,req.body)
   res.send(delet)
}
module.exports ={signup,read,update,delet}
const express= require('express');
const db = require('./config/db');
const app = require('./Routes/route');
const route=express()
route.use(express.json())
route.use(app)
route.listen(8090,()=>{
    console.log("server running in port 8090")
    db();
})
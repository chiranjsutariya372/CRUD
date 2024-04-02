const Routes=require("express")
const { signup, update, read, delet } = require("../controller/controllers")
const user = require("../model/Schema")
const app=Routes()

app.post("/signup",signup)
app.get("/read",read)
app.patch("/update/:id",update)
app.delete("/delete/:id",delet)

module.exports=app
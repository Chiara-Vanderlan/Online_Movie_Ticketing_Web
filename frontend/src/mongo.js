const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://user:user@user.nuquuue.mongodb.net/userDB?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongo connected")
})

.catch(()=>{
    console.log("fail")
})

const newSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
})

const collection = mongoose.model("collection", newSchema)
module.exports = collection
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors());
const regRoutes = require("./routes/Register")
app.use(regRoutes);

mongoose.connect("")
        .then(()=> {
            console.log("connected")
        })

        .catch((err)=> console.log(err))

app.listen(8080,()=> {
    console.log("server is running")
});
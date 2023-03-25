require("dotenv/config");

const express = require("express");
const app = express();

const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors({ origin: true }));
app.use(express.json());

//For testing

app.get("/", (req, res) => {
  
  return res.json("Testing");
 });

mongoose.connect('mongodb+srv://user:user@user.nuquuue.mongodb.net/movieDB?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });

const movieRouter = require("./routes/movie");
app.use("/movie", movieRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);


app.listen(3000, () => console.log("Listening to port 8000"));
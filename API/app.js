const { googleAuth } = require("./configs/google.auth");
const passport = require("passport");
const session = require("express-session");


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

app.use(

  session({
    secret : 'Movie website',
    resave: false,
    saveUninitialized : false,
    cookie : { 
      secure : false,
      expires: new Date(Date.now()+10000),
      maxAge: 10000 
    }

  })
)
app.use(passport.initialize());
app.use(passport.session());

app.listen(3001, () => {
  console.log("Listening to port 8000")
  googleAuth(passport);

}
  );
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const express = require("express");
const router = express.Router();


const googleAuth = (passport)=>{
    GoogleStrategy.Strategy ;

    passport.use(new GoogleStrategy(
        {
        clientID: '545206627430-utb01gnsr1kgg06cqpm84af7a2u5ov9p.apps.googleusercontent.com',
        clientSecret :'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',
        callbackURL :'http://localhost:3000/auth/google/callback'
        }, 
        (accessToken,refreshToken,profile,callback)=>{
        console.log(profile);
        return callback(null.profile);
         }
    )
    );
    router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

    router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
    // Successful authentication, redirect home.
        res.redirect('/');
  });

  passport.serializeUser((user, callback) =>{
    callback(null, user.id);
  });
  
  passport.deserializeUser((id, callback) =>{
    callback(null,id);
  });
};

module.exports = { googleAuth };
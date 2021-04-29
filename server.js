const express = require('express');
 
const app = express();
 
app.get("/", function(req, res){
    res.send("Welcome to  Farheen's Basic Site");
})
app.get("/resume",funtion(req,res){
    res.send("This is my resume page");
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

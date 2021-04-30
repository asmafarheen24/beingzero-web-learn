const express = require('express');
 
const app = express();
 
app.get("/", function(req, res){
    res.send("Welcome to  Farheen's Basic Site");
})
app.get("/resume", function(req, res){
    res.send("This is my resume page");
    let i=__dirname+"/resume.html"
   res.sendFile(i);

})

 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

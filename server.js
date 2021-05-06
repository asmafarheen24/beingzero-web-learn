const express = require('express');
 
const app = express();
 app.use(express.static(__dirname+"/frontend"));
 
app.get("/", function(req, res){
    res.send("Welcome to  Farheen's Basic Site");
})
app.get("/resume", function(req, res){
    
    let i=__dirname+"/frontend/html files/resume.html";
   res.sendFile(i);

});
app.get("/apple", function(req, res){
    
    let x=__dirname+"/frontend/html files/apple.html";
   res.sendFile(x);

});
app.get("/rgb", function(req, res){
    
    let y=__dirname+"/frontend/html files/rgb.html";
   res.sendFile(y);

});
app.get("/google", function(req,res){
    let z=__dirname+"/frontend/html files/google.html";
    res.sendFile(z);
});


// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

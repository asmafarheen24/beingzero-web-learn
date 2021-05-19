const express = require('express');
const courseLib = require('./backend/lib/courselib');
 
const app = express();
const mongoose = require('mongoose');
 app.use(express.static(__dirname+"/frontend"));
 var password = process.env.Mongo_atlas_password;
 console.log(password)
var connectionString = "mongodb+srv://Farheen:"+password+"@cluster0.i9xkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 
mongoose.connect(connectionString, {});
mongoose.connection.on('connected', function(){
    console.log("Database connected");

});
 
app.get("/", function(req, res){
    res.send("Welcome to  Farheen's Basic Site");
})
app.get("/resume", function(req, res){
    
    let i=__dirname+"/frontend/html files/resume.html";
   res.sendFile(i);

});
app.get("/crud", function(req, res){
    
    let i=__dirname+"/frontend/html files/course.html";
   res.sendFile(i);

});
app.get('/api/courses', courseLib.getallcourses);
app.post('/api/courses', courseLib.createcourse);

app.get("/apple", function(req, res){
    
    let x=__dirname+"/frontend/html files/apple.html";
   res.sendFile(x);

});
app.get("/rgb", function(req, res){
    
    let y=__dirname+"/frontend/html files/rgb.html";
   res.sendFile(y);

});
app.get("/signin", function(req, res){
    
    let s=__dirname+"/frontend/html files/login.html";
   res.sendFile(s);

});
app.get("/overview", function(req, res){
    
    let w=__dirname+"/frontend/html files/pie.html";
   res.sendFile(w);

});
app.get("/code", function(req, res){
    
    let b=__dirname+"/frontend/html files/codeforces.html";
   res.sendFile(b);

});
app.get("/todo", function(req, res){
    
    let c=__dirname+"/frontend/html files/todo.html";
   res.sendFile(c);

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

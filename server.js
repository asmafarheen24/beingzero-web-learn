const express = require('express');
const mongoose = require('mongoose');
const path=require('path')
const config=require('./backend/config/config');
const courselib = require('./backend/lib/courselib');
const dbConectLib=require('./backend/lib/dbConnectLib');
var password = process.env.Mongo_atlas_password;
 console.log(password)
var connectionString = config.mongoConnectionString//"mongodb+srv://Farheen:Shannudb3562@cluster0.i9xkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connection.on('connected',function(){
//     console.log("Database Connected");
// })

const app = express();
app.use(express.static(__dirname+"/frontend"));
 
   app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 dbConectLib.connect();

 
// mongoose.connect(connectionString, {useFindAndModify: false});
// var db = mongoose.connection;
// db.on('connected', function () {
// console.log('MongoDB connected!');
// });
//db.collection.deleteMany({});


// db.on('error', function (error) {
// console.error('Error in MongoDb connection: ' + error);
// });

// db.on('disconnected', function () {
// console.log('MongoDB disconnected!');
// });



 
app.get("/", function(req, res){
    res.send("Welcome to  Farheen's Basic Site");
})
app.get("/resume", function(req, res){
    
    let i=__dirname+"/frontend/html files/resume.html";
   res.sendFile(i);

});
app.get("/crud", function(req, res){
    
    let i=__dirname+"/frontend/html files/crud.html";
   res.sendFile(i);

});

app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.post("/crud",courselib.addnewone);
app.put("/crud/:idd", courselib.update);

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
//const PORT = process.env.PORT || 3000;

// Start the server
app.listen(config.webPort, function(){
    console.log("Server Starting running on http://localhost:"+config.webPort);
})

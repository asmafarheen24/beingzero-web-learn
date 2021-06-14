const express = require('express');
const mongoose = require('mongoose');
const path=require('path')
const config=require('./backend/config/config');
const courselib = require('./backend/lib/courselib');
const dbConectLib=require('./backend/lib/dbConnectLib');
var password = process.env.Mongo_atlas_password;
 console.log(password)
var connectionString = config.mongoConnectionString//"mongodb+srv://Farheen:Shannudb3562@cluster0.i9xkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


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
    
    let k=__dirname+"/frontend/html files/index.html";
   res.sendFile(k);
})
app.get("/dashboard", function(req, res){
    
    let log=__dirname+"/frontend/html files/dashboard.html";
   res.sendFile(log);

});
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
app.get("/login", function(req, res){
    
    let login=__dirname+"/frontend/html files/login.html";
   res.sendFile(login);

});
app.get("/register", function(req, res){
    
    let register=__dirname+"/frontend/html files/register.html";
   res.sendFile(register);

});

app.get("/api", function(req, res){
    
    var details= { name: "a",age:"29",clg:"cmr"}
    res.send(details)

});
var userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    isDeleted : {type:Boolean,default:false}
    
    
    });
    
    
var users = mongoose.model('users' , userSchema);

app.post('/api/register', function(req,res){
    users.find({email : req.body.email }, function (err, data) {
        if(err){ res.status(400).json({msg:"Failed"}); }
        else {//console.log(data);
              if(data.length>0)
              res.status(200).json({msg:"Saved Successful", result : data});
              else
              { 
                
                var add= new users(req.body);
                add.save(function(err,record) {
                if(err){
                    res.redirect("/register");
                }
                else {
                    res.redirect("/login");
                   }
                });
              }
             }
    });
})



app.post('/api/login', function(req,res){
    //console.log(req)
    //res.send(req)
    users.find(req.body , function (err, data) {
        if(err){ res.status(400).json({msg:"Failed"}); }
        else if(data.length==1)
        {
            res.redirect("/dashboard");
              
             }
             else{
                 res.redirect("/login");
             }
    });
})

app.get('/' , function(req,res){
    res.send("welcome ");} )
    
app.get("/signin", function(req, res){
    
    let s=__dirname+"/frontend/html files/sign-in.html";
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

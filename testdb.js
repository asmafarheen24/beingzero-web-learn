const mongoose = require('mongoose');
const courselib=require('./backend/lib/courselib');
// var password = process.env.Mongo_atlas_password;
var connectionString = "mongodb+srv://Farheen:Shannudb3562@cluster0.i9xkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 
mongoose.connect(connectionString, {useUnifiedTopology: true,useNewUrlParser: true});
mongoose.connection.on('connected', function(){
    console.log("Database connected");

});


courselib.createcourse({coursename:'mean stack course'},function(err,course){
    console.log(course);
});

    const mongoose=require('mongoose');
    var dbOptions={ useNewUrlParser: true, useUnifiedTopology: true};
    const config=require("../config/config")
    module.exports={
        connect:function(){
            mongoose.connect(config.mongoConnectionString,dbOptions);
            var db=mongoose.connection;
            db.on('connected',function(){
                console.log("Database Connected");  
            });
        }
    }
           
    // mongoose.connect(connectionString, {useFindAndModify: false});
    // var db = mongoose.connection;
    // db.on('connected', function () {
    // console.log('MongoDB connected!');
    // });
    // db.on('error', function (error) {
    //     console.error('Error in MongoDb connection: ' + error);
    //     });
        
    //     db.on('disconnected', function () {
    //     console.log('MongoDB disconnected!');
    //     });
        
        
    

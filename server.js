var express=require('express');
var app=express();
var PORT = 7000||process.env.PORT;

//db
require('./db/createconnection');

//body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//user auth
app.use('/',require('./routes/signup'));
app.use('/',require('./routes/login'));
app.use('/',require('./routes/allusers'));
app.use('/',require('./routes/user'));

app.use('/',function(req,res){
     res.send("hello");
})

app.listen(PORT,function(){
    console.log("App running ")
})

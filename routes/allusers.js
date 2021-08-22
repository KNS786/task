var express=require('express');
var router=express.Router();
var db=require('../db/createconnection')

router.get('/alluser',function(req,res){
     db.query("SELECT `username`,`fullname`,`email` FROM `user`",function(error,results){
         //get all 
         if(results.length > -1 ){
            res.status(200).json({results});
        }
         else{
             return res.status(404).json({err:'connot get db user'})
         }
     })
  
})

module.exports=router;
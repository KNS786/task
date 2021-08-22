var express=require('express');
var router=express.Router();
var db=require('../db/createconnection');
//loginusername and adding following 
/*
   username(login user)/(followerusername)
*/

;

router.get("/me/:id",function(req,res){
     var id=req.params.id;//following user id // select for login user for choose followers 
     //login username 
     var loginuser=req.body.id;
     var newFollower={
         user_id:loginuserid,
         follower_id:id
     }
     var body={
         loginuser:req.body.username,
         loginuserid:req.body.id
     }
     //get user table registed user data in searching 
     db.query("SELECT `username` from `user` where `id`= ?",[id],function(err,results){
         if(results.length > -1){
            db.query("INSERT INTO `follower` SET ? ",[newFollower],function(req,res){
                   if(results.length>-1){
                       res.status(200).json({msg:'follwing success'})
                   }
            });
         }
         else{
             res.status(404).json({err:'something wrong '});
         }
     })

})



module.exports=router;
var express=require('express');
var router=express.Router();
var db=require('../db/createconnection');

router.post('/login', function(req,res){
    var {email,password}=req.body;
    db.query('SELECT id FROM user WHERE `email`=? AND `password`=?',[email,password],async function(error,results){
        if(results.length > 0 ){
            //after successfull login
            res.status(200).json({msg:'login successfully'})
        }
        else{
            res.status(400).json({msg:'please register account'})
        }
    })
   
})

module.exports=router;
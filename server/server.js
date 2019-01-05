var express=require('express');
var bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
var {mongoose} =require('./mongo-connect.js');
var {Emp} =require('./model/emp');
var app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  },bodyParser.json());
app.post('/ssave',(req,res)=>{
 
   
   var employee=new Emp({
    name:req.body.name,
	email:req.body.email,
      gender:req.body.gender,
      city:req.body.city,
     
      password:req.body.password
   });
   employee.save().then((doc)=>{
      res.send(doc);
      
    },(e)=>{
       res.status(400).send(e);
   });
});

app.post('/login',(req,res)=>{
 
  var  email=req.body.email;
 
  var token=jwt.sign(email,'8469')
 
   var password=req.body.password;
   //console.log(email);
   Emp.findOne({email:email,password:password}).then((emp)=>{
    if(!emp)
    {
         return  res.status(400).send({error:'Invalid User'});
   }
       
      //  console.log(token);
   res.send({"token":token});
      

    
}).catch((e)=>console.log(e));
});

app.listen(3000,()=>{
    console.log('started at 3000');
});
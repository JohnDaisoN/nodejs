const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.send('Hello JD SIR')
})
app.get('/human',function(req,res){
    res.send('YES JD SIR IS A HUMAN')
})
app.get('/animal',function(req,res){
    res.send("I don't knwo for sure whether you are an animal or not")
})
app.listen(9000,function(req,res){
   console.log('run...') 
}); 
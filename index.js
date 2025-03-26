const express=require('express');
const jwt=require('jsonwebtoken');
const port=3000;

const app=express();

app.post("/user/signup",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})

app.post("/user/signin",(req,res)=>{
    res.json({
        message:"signin endpoint"
    })
})

app.post("/course/purchase",(req,res)=>{
    res.json({
        message:"purchase endpoint"
    })
})

app.post('/courses',(req,res)=>{
    
})
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});
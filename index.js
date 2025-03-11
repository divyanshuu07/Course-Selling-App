const express=require('express');
const jwt=require('jsonwebtoken');

const app=express();

app.get('/login',(req,res)=>{
    res.send("This page is for login")
})

app.get('/signup',(req,res)=>{
    res.send("This page is for signup")
})

app.get('/purchase',(req,res)=>{
    res.send("This page is for purchasing")
})

app.get('/course',(req,res)=>{
    res.send("This page is for seeing courses.")
})
app.listen(3000);
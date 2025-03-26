const {Router}=require("express");
const courseRouter=Router();

courseRouter.post("/purchase",(req,res)=>{
    res.json({
        message:"purchase endpoint"
    })
})
courseRouter.post('/courses',(req,res)=>{
    res.json({
        message:"course endpoint"
    })
})

module.exports={
    courseRouter:courseRouter
}
const express=require('express')
const {userRouter}=require("./routes/user");
const {courseRouter}=require("./routes/course");
const {adminRouter}=require("./routes/admin");
const port=3000;
const app=express();


app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/course",courseRouter);


app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});
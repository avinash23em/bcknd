import express from 'express';
const app=express();
const port=process.env.port || 3000;

app.get("/",(req,res)=>{
res.send("hellow world");
});

app.get("/api/users",(req,res)=>{
res.send([
    {id:1,username:"avi",displayName:"ap23"},
    {id:2,username:"avi",displayName:"ap23"},
    {id:3,username:"avi",displayName:"ap23"}
])
})
app.listen(port,()=>{
    console.log(`listening on port ${port}` )
});
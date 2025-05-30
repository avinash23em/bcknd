import express from 'express';
const app=express();
const port=process.env.port || 3000;

app.get("/",(req,res)=>{
res.send("hellow world");
});
const mock=[ 
    {id:1,username:"avi",displayName:"ap23"},
    {id:2,username:"bvi",displayName:"xp23"},
    {id:3,username:"cvi",displayName:"fp23"},
    {id:4,username:"dvi",displayName:"yp23"}
]

app.get("/api/users",(req,res)=>{
    console.log(req.query);
    const {query :{filter,value},}=req;
    if(!filter && !value) res.send(mock);
    if(filter && value){
        return res.send(
            mock.filter((user)=>user[filter].includes(value))
        );
    }
})

app.get("/api/users/:id",(req,res)=>{
    console.log(req.params);
    const parseId=parseInt(req.params.id);
    if(isNaN(parseId)){
        return res.sendStatus(400)
    }
    const finduser=mock.find((user)=>user.id==parseId);
    if(!finduser) res.send(404);
    return res.send(finduser);
})
app.get("api/users/product",(req,res)=>{
    const user={id:req.params.id,username:"avi",displayName:"ap23"}
    res.send(user);
})  

app.listen(port,()=>{
    console.log(`listening on port ${port}` )
});
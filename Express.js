const express=require("express");
const app=express();

app.get("/" ,(req,res)=>{
    res.send("welcome to express js application.it is first express haa bhai ");
});
 app.get("/about" , (req,res)=>{
    res.send("welcome to about application: ");
 })
 app.get("/contact" , (req,res)=>{
    res.send("welcome to contact application: ");
 })

app.listen(8082,()=>{
    console.log("your applicaton run successfully");
})
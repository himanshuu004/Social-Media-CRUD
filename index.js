const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

let  posts = [
    {
        username: "Himanshu Rawat",
        content: "I love Music",
    },
    {
        username: "Himanshu Rawat",
        content: "I love Music",
    },
    {
        username: "Himanshu Rawat",
        content: "I love Music",
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});


app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
})

app.post("/post",(req,res)=>{
    let {username , content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
})

 
app.get("/",(req,res)=>{
    res.send("Server workin well");
})

app.listen(port,()=>{
    console.log("App is listening...");
})
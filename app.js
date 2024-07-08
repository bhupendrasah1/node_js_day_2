const express = require("express")
const connectToDb = require("./database/database")
const app = express()

connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    const Heading = "Aces Workshop"
    res.render("about.ejs",{Heading})
})
app.post("/createblog",async (req,res)=>{
console.log(req.body)
const{title,subtitle,description}= req.body
console.log(title,subtitle,description)
Blog.create({
title,
substitle,
description
})
res.send("post hitted")

})
app.listen(3000,()=>{
     console.log("Nodejs project has started at port "+ 3000)
 })
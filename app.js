const express = require("express")

const app = express()
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    const Heading = "Aces Workshop"
    res.render("about.ejs",{Heading})
})

app.listen(3000,()=>{
    console.log("Nodejs project has started at port "+ 3000)
})
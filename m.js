const express = require("express")

const app = express()
const port = process.env.PORT || 8009
require("./db/db")
const model = require('./db/model')

const bodyparser = require('body-parser')


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : false}))

app.set("view engine", "ejs")

app.get("/",(req,res)=>{

    model.find({}).sort({ name : 1}).then((da)=>{
        res.render("alltester",{data : da})
    })

})

app.get("/male",(req,res)=>{

    model.find({gender : "Male"}).then((da)=>{
        res.render("alltester",{data : da})
    })

})
app.get("/credit",(req,res)=>{

    model.find({credit : {$gt : 0}}).then((da)=>{
        res.render("alltester",{data : da})
    })

})


app.get("/completed",(req,res)=>{

    model.find({}).then((da)=>{
        res.render("kio",{data : da})
    })
})


app.get("/update",(req,res)=>{

    model.find({}).then((da)=>{
        res.render("edit",{data : da})
    })
})

app.get("/update/:name",(req,res)=>{
const name = req.params.name
    model.findOne({name : name}).then((da)=>{
        res.render("edited",{data : da})
    })
})
app.post("/update/", (req, res) => {
    const { name,languages,credit,annualincome,gender } = req.body

    model.findOneAndUpdate(req.body._id, 
          {  name,languages,credit,annualincome,gender }
        ).then((docs)=>{
          
        res.redirect("/update")
        })
})

app.get("/delete/:name", (req, res) => {

    model.findOneAndDelete(req.params.name).then((data)=>{
         res.redirect("/") 
   
}) })


app.listen(port,()=>{
console.log(` ${port} port running`);
})
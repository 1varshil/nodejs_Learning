const express = require('express')
var app = express()

app.set("view engine","ejs")
app.use(express.static('./public'))

app.use(function(req,res,next)  {
    console.log("Hello from middleware:");
    next();
})

app.get("/",function(req,res) {
    res.render("index",{age:21});
})

app.get("/contact",function(req,res){
    res.render("contact",{name:"eFoodCourier"})                      
})
app.get("/order",function(req,res){
    res.render("order",{Uname : "Varshil",Lname:"Bhojak"});
})

app.get("/:error",function(req,res,next){                        
    // res.render("error",{name:"varshil"})
    throw Error("Something Went Wrong");
})


// app.get("/Profile/:Vars",function(req,res){
//     res.send(`Hello From ${req.params.Vars}`)
// })
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000);                  
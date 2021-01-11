const express = require('express')
const path = require('path')

const app = express()
const port = 3000;

const currentDate = new Date();
const day = currentDate.getDay();
const hours = currentDate.getHours();

app.use((req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 10 && hours < 17) {
    next();
  } else {
    res.send("Out of service !");
  }
});


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/style.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/style.css'));
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/public/about.html'));
});

app.get('/services',function(req,res){
  res.sendFile(path.join(__dirname+'/public/services.html'));
  
app.get('/contactus',function(req,res){
  res.sendFile(path.join(__dirname+'/public/contactus.html'));
});
});

app.listen (port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
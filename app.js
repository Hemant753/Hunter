
const express = require('express');
const app = express();
const mong = require('./models/mongo');
const path = require('path');

app.use( express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));


app.get("/", (req,res)=>{
    res.send("Hello");
})

app.listen(3000, ()=>{
    console.log('http//:localhost3000');
    
})

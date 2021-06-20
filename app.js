const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.listen(port,(error)=>{
    console.log((error)?error:`listening to port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("hello");
});
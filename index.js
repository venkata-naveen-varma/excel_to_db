import express from 'express';

require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

app.get('/test', (req, res)=>{
    console.log("In /test");
    var msg = "testing";
    res.json({msg});
})
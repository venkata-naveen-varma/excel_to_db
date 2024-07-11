import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pool from "./src/utils/db_connection.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/test', (req, res)=>{
    console.log("In /test");
    var msg = "testing";
    
    const query = 'SELECT * FROM testtable1'
    
    const result = pool.query(query, (err, result) => {
        if (err) return console.log(err);
        console.log(result);
        res.send(result);
    });
    res.json({msg});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
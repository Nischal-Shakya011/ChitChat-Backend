const express = require ("express")
const dotenv = require('dotenv')
const app = express();

dotenv.config();
require('./config/db')

app.get("/", (req, res)=>{
    res.send("api started")
})
let PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server Started at Port ${PORT}`);
})
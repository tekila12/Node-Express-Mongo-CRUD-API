
const express =require('express')

const dotenv = require('dotenv')


const app=express()
const port= 3000

const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})

connectDB();

app.use('/', require('./routes/index'));
/*
app.get('/',(req, res)=>{
    res.send('Hello world')
});


app.get('/employees',(req,res)=>{
    res.send('employees')
})
*/
app.listen(port,()=>{
    console.log('live on ' + port)
})
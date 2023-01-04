require('dotenv').config()

const express=require('express');//import express

const DB=require('./db/connect')

//Importing Routes
const employeeRoutes=require('./routes/employees.route');
//Basic Route implementation
const app=express();//initiate express
app.use(express.json());//To parse JSON objects

//Connecting to Database
DB();
app.get('/',(req,res)=>{
    res.send('Welcome')
})
//custom middleware

app.use(employeeRoutes)

app.get('/hello',(req,res)=>{
    res.send("Hello World")
})


const PORT=process.env.PORT ||4000
app.listen(4000,()=>{//listening the express
    console.log(`App is Running on ${PORT}`)
})


// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/dbconnection.js'

dotenv.config()


connectDB()






/*
import express from 'express'
const app = express() 

(async()=>{
    try {
      await  mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
      app.on('ERROR: ', (error)=>{
        console.log("ERR: ", error);
        throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
      })
    } catch (e) {
        console.error("ERROR: ", e);
        throw e
    }
})()*/
import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const port = process.env.PORT
const dbURI = process.env.DBURI

console.log(dbURI)

const app = express()
mongoose.set('strictQuery', true)
mongoose.connect(dbURI) 
    .then(result => {
        app.listen(port, () => {
            console.log(`this app is running in port http://localhost:${port}`)
        } )
    })
    .catch(err => {
         console.log(err)
    })




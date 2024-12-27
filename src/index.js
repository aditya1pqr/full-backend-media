import dotenv from "dotenv"
import DB_CONNECT from "../db/index.js"
import { app } from "./app.js"

dotenv.config({
    path:'./env'
})

DB_CONNECT()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Error connecting to database",err)
})
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DB_CONNECT = async()=>{
    try {
       const ConnectionInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MONGODB CONNECTED : HOST-> ${ConnectionInstances.connection.host} `)
    } catch (error) {
        console.error(`MongoDB connection error !!`,error);
        process.exit(1);
        
    }
}

export default DB_CONNECT;
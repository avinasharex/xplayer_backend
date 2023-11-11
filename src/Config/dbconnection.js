import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected DB HOST: ${connectionInstance.connection.host}`);
    } catch (e) {
        console.log("MONGODB connection error ", e);
        process.exit(1)
    }
}

export default connectDB
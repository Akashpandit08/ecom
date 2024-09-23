
import dotenv from "dotenv";


import {connectDB} from "./db/index.js";
import app from "./app.js";


dotenv.config({
    path:'./env'
})

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
connectDB(mongoURI)
.then(()=>{
    app.listen(process.env.PORT)
    console.log(`server is runing at port: ${process.env.PORT}`);
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!, err ",err);
})


       
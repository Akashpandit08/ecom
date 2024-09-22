
import dotenv from "dotenv";


import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT)
    console.log(`server is runing at port: ${process.env.PORT}`);
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!, err ");
})


       
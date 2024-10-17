import express from "express";


import cookieParser from "cookie-parser";
import bodyParser from 'body-parser'

import cors from "cors"


const app = express()



app.use(cors(
    {
      origin: process.env.CORS_ORIGIN,
      credentials:true
    }
  ))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:false,limit:"100kb"}))
app.use(bodyParser())
app.use(express.static("public"))
app.use(cookieParser())

import userRoutes from './routes/User/user.routes.js'

import adminRouter from "./routes/Admin/admin.routes.js";




app.use('/uploads', express.static('uploads'));
app.use("/", userRoutes);

app.use("/api/v1/admin",adminRouter)

export default app;
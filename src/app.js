import express from "express";


import userRoutes from './routes/user.routes.js'


const app = express()






app.use("/", userRoutes);

export default app;
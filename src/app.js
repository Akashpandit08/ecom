import express from express;


const app = express()


import userRoutes from './routes/user.routes.js'




//routes declartion 

app.use("/", userRoutes);
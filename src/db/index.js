
import mongoose from "mongoose";

export const connectDB = (uri) => mongoose.connect(uri, { dbName: "cluster0", }).then((c) => {
  
}).catch((err) => console.log(err));

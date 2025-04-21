import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/routes.js';


const app = express();
dotenv.config();

const PORT = process.env.Port || 3000;
const URI = process.env.MOBGODB_URI || "mongodb://localhost:27017/Volto";

mongoose.connect(URI,{
    useNewurlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB is connected successfully")
})


app.use('/',router);




app.listen(PORT, () => {
    console.log(`your port is running on ${PORT}`);
})
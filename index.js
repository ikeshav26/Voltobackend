import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/routes.js';
import cors from 'cors';


const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = process.env.Port || 3000;
const URI = process.env.MOBGODB_URI || "mongodb://localhost:27017/Volto";



mongoose.connect(URI,{
    useNewurlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB is connected successfully")
})





app.use('/',router);

app.get('/',(req,res) => {
    res.send("Hello from the Volto backend")
})





app.listen(PORT, () => {
    console.log(`your port is running on ${PORT}`);
})
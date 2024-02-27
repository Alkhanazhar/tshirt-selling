import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from "./routes/productRoute.js"
import cors from 'cors';

dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/auth', userRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.send('abc');
})
const port = process.env.PORT || 7000
app.listen(port, () => {
    console.log(`Welcome to ${process.env.PORT}`)
})
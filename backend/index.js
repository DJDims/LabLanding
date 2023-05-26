import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import db from './connection/database.js';

import userRoute from './routes/userRoutes.js';
import registerRoute from './routes/registerRoutes.js';

dotenv.config();

const app = express();

db.sync()

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.log('Connection error: ', error);
}

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());

app.use('/users', userRoute);
app.use('/register', registerRoute);

app.listen(5000, () => console.log('Server running at port 5000'));
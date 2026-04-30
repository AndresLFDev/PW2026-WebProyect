import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import meetingsRouter from './routes/meetings.js';
import usersRouter from './routes/users.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/meetings', meetingsRouter);
app.use('/api/users', usersRouter);

app.get('/health', (req, res) => {
    try {
        res.json({ status: 'OK' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import mongoose from 'mongoose';
import { db } from './config.js';
import cors from 'cors';

import categoryRouter from './routes/categoryRouter.js'
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
import orderRouter from './routes/orderRouter.js';

const app = express();
app.use(cors());
app.use(express.json());





app.use('/categories', categoryRouter)
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/orders', orderRouter)


mongoose.connect(db)
.then(() => {
    app.listen(4001, () => {
        console.log('Server running on port 4001');
    });
})
.catch((error) => {
    console.error('Database connection failed:', error);
});

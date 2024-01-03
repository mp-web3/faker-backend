import express from 'express';
import { OrderController } from './controllers/order.controller';

const app = express();
app.get('/orders', OrderController.getAllOrders);
app.get('/orders/:id', OrderController.getOrderById);

export default app;

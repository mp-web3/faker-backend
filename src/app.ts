import express from 'express';
import { OrderController } from './controllers/order.controller';
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/orders', OrderController.getAllOrders);
app.get('/orders/:id', OrderController.getOrderById);

export default app;

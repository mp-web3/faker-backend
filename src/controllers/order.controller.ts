import { Request, Response } from 'express';
import { OrderService } from '../services/order.service';

export class OrderController {
  public static getAllOrders(req: Request, res: Response) {
    const orders = OrderService.getAllOrders();
    res.json(orders);
  }

  public static getOrderById(req: Request, res: Response) {
    const orderId = parseInt(req.params.id, 10);
    const order = OrderService.getOrderById(orderId);

    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  }
}

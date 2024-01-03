import { generateFakeOrders } from '../utils/faker.util';

export class OrderService {
  public static getAllOrders() {
    return generateFakeOrders(10);
  }

  public static getOrderById(orderId: number) {
    const orders = this.getAllOrders();
    return orders.find(order => order.id === orderId);
  }
}

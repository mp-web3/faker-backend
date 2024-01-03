import faker from 'faker';
import { Order } from '../interfaces/order.interface';

export function createFakeOrder(): Order {
  return {
    id: faker.datatype.number(),
    orderId: faker.datatype.uuid(),
    amount: faker.datatype.float({ min: 0, max: 10000 }),
    currency: faker.finance.currencyCode(),
    bankIban: faker.finance.iban(),
    bankBic: faker.finance.bic(),
    bankName: faker.company.companyName(),
    userEmail: faker.internet.email(),
    userBirthday: faker.date.past().toISOString(),
    gatewayId: faker.random.alphaNumeric(10),
    merchantId: faker.random.alphaNumeric(10),
    status: faker.random.arrayElement(['pending', 'completed', 'failed']),
    btcAmount: faker.datatype.float({ min: 0, max: 5 }),
    exchangeRate: faker.datatype.float({ min: 0, max: 1000 })
  };
}

export function generateFakeOrders(count: number): Order[] {
  return Array.from({ length: count }, createFakeOrder);
}

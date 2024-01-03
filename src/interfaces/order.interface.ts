export interface Order {
    id: number;
    orderId: string;
    amount: number;
    currency: string;
    bankIban: string;
    bankBic: string;
    bankName: string;
    userEmail: string;
    userBirthday: string;
    gatewayId: string;
    merchantId: string;
    status: string;
    btcAmount: number;
    exchangeRate: number;
}
  
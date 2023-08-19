export type paymentType = 'CASH' | 'CARD' | 'APPLE_PAY';

export interface IPaymentTypes {
  id: number;
  value: paymentType;
  label: string;
}

export interface ITips {
  id: number;
  value: string;
  label: string;
  percentage: string | null;
}

import { IApiBaseDocument, IApiBusiness } from '@/types';

export interface IApiPromo extends IApiBaseDocument {
  business: string | IApiBusiness;
  description: string;
  emojiPrize: string;
  category: string;
  goalProduct: string;
  goalCount: number;
  bonusProduct: string;
  bonusQuantity: number;
  status: string;
  code: string;
  used: number;
  discount: number;
  displayed: number;
  maxCount: number;
  period: {
    fixed?: string;
    daysOfWeek: string[];
  };
}

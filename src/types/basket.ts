import { ECurrencyCode } from './common';
import { ILatLng } from './geo';
import { IApiFood, IApiOptionsList } from './menu';
import { EOrderSource, EOrderType } from './order';

export interface BasketRequestAward {
  awardId: string;
  amount: number;
  userId: string;
}

export interface BasketRequestAdjustment {
  name: string;
  value: number;
  description?: string;
}
export interface BasketRequestSingleItemOptionListOption {
  optionId: string;
  amount: number;
}

export interface TransformedBasketRequestSingleItemOptionListOption
  extends BasketRequestSingleItemOptionListOption {
  optionListId: string;
}

export interface BasketRequestSingleItemOptionList {
  optionListId: string;
  options: BasketRequestSingleItemOptionListOption[];
}

export interface TransformedBasketRequestSingleItemOptionList {
  options: TransformedBasketRequestSingleItemOptionListOption[];
}

export interface BasketRequestSingleItem {
  uuid?: string;
  itemId: string;
  amount: number;
  options: BasketRequestSingleItemOptionList[];
}

export interface BasketRequestSingleItemWithExtras
  extends BasketRequestSingleItem {
  price?: number;
}

export interface TransformedBasketRequestSingleItem {
  uuid?: string;
  price?: number;
  itemId: string;
  amount: number;
  options: TransformedBasketRequestSingleItemOptionListOption[];
}

export type BasketRequestItem = BasketRequestSingleItem;

export interface BasketRequest {
  type: EOrderType;
  source: EOrderSource;
  currencyCode: ECurrencyCode;
  merchantId: string;
  businessId: string;
  notes?: string;
  userIds?: string[];
  waiterId?: string;
  awards: BasketRequestAward[];
  adjustments: BasketRequestAdjustment[];
  items: BasketRequestItem[];
  deliveryLocation?: ILatLng;
  availableAwardUserId?: string;
}

export interface BasketRequestItemCheckout {
  itemId: string;
  amount: number;
  options: BasketRequestSingleItemOptionList[];
}

export interface BasketRequestCheckout extends Omit<BasketRequest, 'items'> {
  items: BasketRequestItemCheckout[];
}

// we use this inside use-basket.tsx hook
export interface BasketProduct extends IApiFood {
  _id: string;
  amount?: number;
  totalPrice?: number;
  uuid: string;
  selectedOptions: (IApiOptionsList['options'][number] | null)[];
}

export type BasketProducts = BasketProduct[];

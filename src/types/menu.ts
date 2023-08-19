import { IApiBaseDocument, IApiBusiness } from '@/types';

export interface IOption extends IApiBaseDocument {
  title: string;
  min: number;
  max: number;
  defaultCount: number;
  calories: number;
  size: string;
  sizeUnit: string;
  available: boolean;
  price: number;
}

export interface IApiOptionsList extends IApiBaseDocument {
  title: string;
  name: string;
  enabled: boolean;
  min: number;
  max: number;
  options: IOption[];
  merchant: string;
  business: string;
}

export interface IApiFood extends IApiBaseDocument {
  business: string | IApiBusiness;
  name: string;
  photo: string;
  photoW150: string;
  category: string[];
  categories: {
    categoryId: string;
    orderIndex: number;
  }[];
  options: string[];
  weight: number;
  size: number;
  sizeUnit: string;
  ingredients: string[];
  vegetarianism: 'vegan' | 'vegetarian' | 'no';
  spicyLevel: 'not-spicy' | 'slightly-spicy' | 'spicy' | 'very-spicy';
  price: number;
  advancedPrice: {
    eatIn: number;
    pickUp: number;
    delivery: number;
  };
  description: string;
  calories: number;
  availability: boolean;
}

export interface IApiFoodBasket extends IApiFood {
  amount?: number;
  totalPrice?: number;
  selectedOptions?: IApiOptionsList[];
}

export interface IApiCategory extends IApiBaseDocument {
  title: string;
  enabled: boolean;
  availability: {
    start: string;
    end: string;
    days: string[];
  }[];
  merchant: string;
  business: string;
  orderIndex: number;
}

export interface MenuOrderFunctions {
  eatIn: boolean;
  pickUp: boolean;
  delivery: boolean;
}

export interface IMenu {
  optionLists: Record<string, IApiOptionsList>;
  food: IApiFood[];
  categories: IApiCategory[];
  orderFunctions: MenuOrderFunctions;
}

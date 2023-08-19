import { IApiBaseDocument, IApiPromo } from '@/types';

export interface IUser {
  _id: string;
  email: string;
  password: string;
  pinCode: string;
  social: {
    appleId: string;
  };
  name?: string;
  avatar: string;
  phone?: string;
  appleIdNonce: string;
  stripeCustomerId: string;
  stripeCustomerIds: {
    UK?: string;
    US?: string;
  };
  homeLocation: {
    type: string;
    coordinates: [number, number];
  };
  workLocation: {
    type: string;
    coordinates: [number, number];
  };
  deliveryAddresses: {
    _id: string;
    name: string;
    subThoroughfare?: string;
    thoroughfare?: string;
    subLocality?: string;
    locality?: string;
    subAdministrativeArea?: string;
    administrativeArea?: string;
    postalCode?: string;
    country?: string;
    coordinates: {
      type: string; // 'Point'
      coordinates: [number, number];
    };
    fullAddress: string;
    deliveryOption: string;
    instructions?: string;
  }[];
  favoritePlaces: {
    business: unknown;
    foursquare: string[];
  };
  favoriteFoods: unknown;
  savedEvents: unknown;
  promoRewards: {
    promo: unknown;
    progressCount: number;
    used: number;
    completed: boolean;
    completedAt?: Date;
    lastCode?: string;
    activeToken?: string;
  }[];
  pushTokens: {
    app: 'consumer' | 'business';
    tokenString: string; // ? Does this even exist?
    locale?: string;
  }[];
  resetLink: string;
  verified: boolean;
  masterUser: boolean; // Legacy, to remove
  createdAt: Date;
  updatedAt: Date;

  // Payments
  externalPaymentServiceIds?: Record<string, string>;
}

export interface IApiUser extends IApiBaseDocument {
  email: IUser['email'];
  social: IUser['social'];
  name?: IUser['name'];
  avatar: IUser['avatar'];
  phone: IUser['phone'];
  appleIdNonce: IUser['appleIdNonce'];
  stripeCustomerId: IUser['stripeCustomerId'];
  stripeCustomerIds: IUser['stripeCustomerIds'];
  externalPaymentServiceIds?: IUser['externalPaymentServiceIds'];
  homeLocation: IUser['homeLocation'];
  workLocation: IUser['workLocation'];
  deliveryAddresses: {
    _id: string;
    name: string;
    subThoroughfare?: string;
    thoroughfare?: string;
    subLocality?: string;
    locality?: string;
    subAdministrativeArea?: string;
    administrativeArea?: string;
    postalCode?: string;
    country?: string;
    coordinates: [number, number];
    fullAddress: string;
    deliveryOption: string;
    instructions?: string;
  }[];
  favoritePlaces: IUser['favoritePlaces'];
  favoriteFoods: IUser['favoriteFoods'];
  savedEvents: IUser['savedEvents'];
  promoRewards: {
    promo: string | IApiPromo;
    progressCount: number;
    used: number;
    completed: boolean;
    completedAt?: Date;
    lastCode?: string;
    activeToken?: string;
  }[];
  pushTokens: IUser['pushTokens'];
  resetLink: IUser['resetLink'];
  verified: IUser['verified'];
  masterUser: IUser['masterUser'];
  createdAt: IUser['createdAt'];
  updatedAt: IUser['updatedAt'];
}

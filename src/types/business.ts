import { foursquareCategories } from './foursquareCategories';
import { IApiBaseDocument, IApiUser } from '@/types';

export interface IApiBusiness extends IApiBaseDocument {
  name: string;
  shortLink: string;
  stripeConnectId: string; // TODO remove this, it's in settings
  categories: string[];
  bio: string;
  priceLevel: number;
  services: string[];
  featuredImage: string;
  mediaLinks: string[];
  merchant: string;
  workingHours: {
    dayOfWeek: string;
    from: string;
    to: string;
    closed: boolean;
  }[];
  timeframes: {
    name: string;
    weekdays: string[];
    time: string[];
  }[];
  menuSettings: {
    showPhoto: boolean;
    columns: string[];
    priceType: string;
    discountPercentage: number; // why is this a thing?
  };
  sections: { name: string }[];
  timezone: string;
  address: string;
  structuredAddress: {
    name: string;
    thoroughfare: string;
    subThoroughfare: string;
    subLocality: string;
    locality: string;
    subAdministrativeArea: string;
    administrativeArea: string;
    country: string;
    countryCode: string;
    postCode: string;
    formattedAddress: string;
    district?: string;
    additionalNumber?: string;
  };
  placeIndex: number;
  website: string;
  phone: string;
  enabledSMSIntegration: boolean;
  chatLink: string;
  social: {
    facebook: string;
    instagram: string;
  };
  stripeRegion: string;
  qrCode: string;
  currencyCode: string; // TODO remove this, it's in settings
  currencySymbol: string; // TODO remove this, it's in settings
  rating: number;
  ratingSignals: number;
  menuType: string;
  pdfMenuUrl?: string;
  menuWebLink?: string;
  benefits: {
    promoOffers: boolean;
    cashlessPayments: boolean;
    preOrder: boolean;
  };
  orderFunctions: {
    eatIn: boolean;
    pickUp: boolean;
    delivery: boolean;
  };
  orderCount: number;
  approved: boolean;
  premium: boolean;
  partner: boolean;
  enabled: boolean;
}

export type Categories = typeof foursquareCategories;

export type IBusinessCategories = {
  categories: Categories;
  metadata: { totalCount: number };
};

export interface IApiReview extends IApiBaseDocument {
  user?: string | IApiUser;
  business?: string | IApiBusiness;
  order?: unknown;
  parentId?: string | IApiReview;
  text: string;
  name?: string;
  avatar?: string;
  showForPlace: boolean;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export type BusinessStore = {
  name: string;
  shortLink: string;
  currencyCode: string;
  businessId: string;
  merchantId: string;
};

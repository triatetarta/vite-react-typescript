import { IApiBaseDocument } from './common';
import {
  IApiBusiness,
  Categories,
  IBusinessCategories,
  IApiReview,
} from './business';
import {
  IApiCategory,
  IApiFood,
  IApiFoodBasket,
  IApiOptionsList,
  IOption,
  IMenu,
  MenuOrderFunctions,
} from './menu';
import { ModifiedWorkingHour, WorkingHour, MediaList } from './utilTypes';
import { IApiPromo } from './promo';
import { IApiUser, IUser } from './user';
import {
  LoginMethod,
  PostLoginResponse,
  AuthType,
  UserPermissions,
  PostRegisterResponse,
} from './auth';
import { IPaymentTypes, ITips } from './payment';
import { ErrorDetail } from './errors';

export type {
  IApiBaseDocument,
  IApiBusiness,
  IApiCategory,
  IApiFood,
  IApiFoodBasket,
  IApiOptionsList,
  IOption,
  IApiPromo,
  IApiUser,
  IApiReview,
  IUser,
  IMenu,
  LoginMethod,
  MenuOrderFunctions,
  Categories,
  IBusinessCategories,
  ModifiedWorkingHour,
  WorkingHour,
  MediaList,
  IPaymentTypes,
  PostLoginResponse,
  PostRegisterResponse,
  AuthType,
  UserPermissions,
  ITips,
  ErrorDetail,
};

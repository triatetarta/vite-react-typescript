import { EResource } from './common';

export type LoginMethod = 'email' | 'guest' | null;
export type AuthType = 'sign-up' | 'sign-in' | null;

export type UserPermissions = Partial<Record<EResource, number>>;

export interface PostLoginResponse {
  token: string;
  uid: string;
  email: string;
  permissions: UserPermissions;
}

export interface PostRegisterResponse {
  token: string;
  uid: string;
  email: string;
  permissions: UserPermissions;
}

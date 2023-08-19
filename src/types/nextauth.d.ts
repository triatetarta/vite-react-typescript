import { DefaultSession } from 'next-auth';
import { UserPermissions } from './auth';

declare module 'next-auth' {
  interface User {
    token: string;
    id: string;
    email: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

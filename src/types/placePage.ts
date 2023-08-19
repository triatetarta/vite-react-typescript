import { Icons } from '@/components/ui/icon';

export type PageNavItem = {
  id: number;
  title: string;
  href: string;
  icon?: keyof typeof Icons;
};

export type PlacePageConfig = {
  pageNav: PageNavItem[];
};

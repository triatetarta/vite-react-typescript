import { ReactNode } from 'react';
import StyleThemeProvider from './style-theme-provider';
import QueryProvider from './query-provider';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <StyleThemeProvider>{children}</StyleThemeProvider>
    </QueryProvider>
  );
};

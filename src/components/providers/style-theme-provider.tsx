import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/lib/config/theme.json';

type StyleThemeProviderProps = {
  children: ReactNode;
};

const StyleThemeProvider = ({ children }: StyleThemeProviderProps) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default StyleThemeProvider;

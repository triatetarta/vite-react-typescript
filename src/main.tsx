import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.css';
import { Providers } from '@/components/providers';
import { Router } from '@/components/layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>
);

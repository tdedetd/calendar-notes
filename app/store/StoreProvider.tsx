'use client';

import { JSX, ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store';
import { Store } from '@reduxjs/toolkit';

export function StoreProvider({ children }: { children: ReactNode }): JSX.Element {
  const storeRef = useRef<Store | null>(null);
  
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>{children}</Provider>
  );
}

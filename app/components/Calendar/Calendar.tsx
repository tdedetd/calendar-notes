'use client';

import { JSX } from 'react/jsx-runtime';
import { Month } from './components/Month/Month';

export function Calendar(): JSX.Element {
  const currentDate = new Date();
  return (
    <Month
      year={currentDate.getFullYear()}
      month={currentDate.getMonth()}
    />
  );
}

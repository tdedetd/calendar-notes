'use client';

import { JSX } from 'react/jsx-runtime';
import { Month } from './components/Month/Month';
import { useTypedSelector } from '@/app/store/store-hooks';
import { CurrentDateInfo } from './components/CurrentDateInfo/CurrentDateInfo';

export function Calendar(): JSX.Element {
  const currentDate = new Date();
  const selectedDateString = useTypedSelector((state) => state.selectedDate.value);

  return (
    <div>
      <Month
        year={currentDate.getFullYear()}
        month={currentDate.getMonth()}
      />

      {selectedDateString && <CurrentDateInfo dateString={selectedDateString} />}
    </div>
  );
}

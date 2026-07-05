'use client';

import { JSX } from 'react/jsx-runtime';
import { Month } from './components/Month/Month';
import { useTypedDispatch, useTypedSelector } from '@/app/store/store-hooks';
import { CurrentDateInfo } from './components/CurrentDateInfo/CurrentDateInfo';
import styles from './Calendar.module.css';
import { next, prev } from '@/app/store/slices/selected-month-slice';

export function Calendar(): JSX.Element {
  const selectedDateString = useTypedSelector((state) => state.selectedDate);
  const selectedMonth = useTypedSelector(({ selectedMonth }) => selectedMonth);

  const dispatch = useTypedDispatch();

  return (
    <div>
      <div className={styles.monthSelectorContainer}>
        <button
          className={styles.monthSelectorButton}
          onClick={() => dispatch(prev())}
        >&lt;</button>
        <button
          className={styles.monthSelectorButton}
          onClick={() => dispatch(next())}
        >&gt;</button>
      </div>

      <Month
        year={selectedMonth.year}
        month={selectedMonth.month}
      />

      {selectedDateString && <CurrentDateInfo dateString={selectedDateString} />}
    </div>
  );
}

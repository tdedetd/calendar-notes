import { JSX } from 'react/jsx-runtime';
import { CalendarDayProps } from './CalendarDay.props';
import styles from './CalendarDay.module.css';
import classNames from 'classnames';
import { weekendDays } from '@/app/utils/constants/weekend-days';
import { set } from '@/app/store/slices/selected-date-slice';
import { useTypedDispatch } from '@/app/store/store-hooks';

export function CalendarDay({ date, month, year }: CalendarDayProps): JSX.Element {
  const dispatch = useTypedDispatch();
  const cellClassNames = getDayClasses(date, month, year);

  return (
    <button
      className={cellClassNames}
      onClick={() => dispatch(set(date))}
    >{date.getDate()}</button>
  );
}

function getDayClasses(date: Date, month: number, year: number): string {
  const weekDay = date.getDay();
  const modifier = date.getMonth() !== month || date.getFullYear() !== year
    ? styles.dayCellDisabled
    : weekendDays.includes(weekDay)
    ? styles.dayCellWeekend
    : null;

  return classNames(
    styles.dayCell,
    ...(modifier ? [modifier] : []),
  );
}

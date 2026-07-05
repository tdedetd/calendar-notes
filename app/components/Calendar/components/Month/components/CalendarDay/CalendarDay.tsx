import { JSX } from 'react/jsx-runtime';
import { CalendarDayProps } from './CalendarDay.props';
import styles from './CalendarDay.module.css';
import classNames from 'classnames';
import { weekendDays } from '@/app/utils/constants/weekend-days';

export function CalendarDay({ date, month, year }: CalendarDayProps): JSX.Element {
  const cellClassNames = getDayClasses(date, month, year);

  return (
    <div className={cellClassNames}>{date.getDate()}</div>
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

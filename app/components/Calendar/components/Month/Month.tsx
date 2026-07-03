import { JSX } from 'react/jsx-runtime';
import { MonthProps } from './Month.props';
import { monthsNames } from '@/app/utils/constants/months-names';
import { calendarConfig } from '@/app/utils/constants/calendar-config';
import styles from './Month.module.css';
import { getDisplayDatesForMonth } from '@/app/utils/functions/get-display-dates-for-month';

export function Month({ month, year }: MonthProps): JSX.Element {
  const monthName = monthsNames[month];
  const datesToDisplay = getDisplayDatesForMonth(month, year, calendarConfig.firstDayOfWeek);

  return (
    <div>
      <h3 className={styles.monthTitle}>{monthName}, {year}</h3>
      <div className={styles.daysContainer}>
        {datesToDisplay.map((date) => (
          <div
            className={styles.dayCell}
            key={date.getTime()}
          >{date.getDate()}</div>
        ))}
      </div>
    </div>
  )
}

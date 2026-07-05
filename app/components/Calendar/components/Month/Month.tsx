import { JSX } from 'react/jsx-runtime';
import { MonthProps } from './Month.props';
import { monthsNames } from '@/app/utils/constants/months-names';
import { calendarConfig } from '@/app/utils/constants/calendar-config';
import styles from './Month.module.css';
import { getDisplayDatesForMonth } from '@/app/utils/functions/get-display-dates-for-month';
import { getDaysOfWeekNames } from '@/app/utils/functions/get-days-of-week-short';
import { CalendarDay } from './components/CalendarDay/CalendarDay';

export function Month({ month, year }: MonthProps): JSX.Element {
  const monthName = monthsNames[month];
  const datesToDisplay = getDisplayDatesForMonth(month, year, calendarConfig.firstDayOfWeek);
  const daysOfWeekNames = getDaysOfWeekNames(calendarConfig.firstDayOfWeek);

  return (
    <div>
      <h3 className={styles.monthTitle}>{monthName}, {year}</h3>
      <div className={styles.daysContainer}>
        {daysOfWeekNames.map((name) => (
          <div
            className={styles.dayOfWeekCell}
            key={name}
          >{name}</div>
        ))}

        {datesToDisplay.map((date) => (
          <CalendarDay
            key={date.getTime()}
            date={date}
            month={month}
            year={year}
          />
        ))}
      </div>
    </div>
  )
}

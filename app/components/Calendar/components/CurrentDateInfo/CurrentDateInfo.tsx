import { JSX } from 'react/jsx-runtime';
import { CurrentDateInfoProps } from './CurrentDateInfo.props';
import styles from './CurrentDateInfo.module.css';
import { monthsNames } from '@/app/utils/constants/months-names';

export function CurrentDateInfo({ dateString }: CurrentDateInfoProps): JSX.Element {
  const date = new Date(dateString);

  const day = date.getDate();
  const monthName = monthsNames[date.getMonth()].toLowerCase();
  const year = date.getFullYear();

  return (
    <p className={styles.container}>{day}, {monthName}, {year}</p>
  );
}

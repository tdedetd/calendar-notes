import { addDay } from './add-day';

export function getDisplayDatesForMonth(
  month: number,
  year: number,
  firstDayOfWeek: number,
): Date[] {
  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayOfMonthInWeekLocal = firstDayOfMonth.getDay() - firstDayOfWeek;
  const firstDayToDisplay = addDay(firstDayOfMonth, -firstDayOfMonthInWeekLocal);

  return Array(7 * 6).fill(null).map((_, i) => addDay(firstDayToDisplay, i));
}

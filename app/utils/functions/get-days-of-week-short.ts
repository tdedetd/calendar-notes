import { DaysOfWeek } from '@/app/enums/day-of-weeks.enum';
import { daysOfWeekLabels } from '../constants/days-of-week-labels';
import { daysOfWeekOrder } from '../constants/days-of-week-order';

export function getDaysOfWeekNames(firstDayOfWeek: DaysOfWeek): string[] {
  const daysOfWeekOrderRelativeToFirstDay = [
    ...daysOfWeekOrder.slice(firstDayOfWeek),
    ...daysOfWeekOrder.slice(0, firstDayOfWeek),
  ];
  return daysOfWeekOrderRelativeToFirstDay.map((dayOfWeek) => daysOfWeekLabels[dayOfWeek].short);
}

import { DaysOfWeek } from '@/app/enums/day-of-weeks.enum';
import { DayOfWeekLabel } from '@/app/models/day-of-week-label.model';

export const daysOfWeekLabels: Record<DaysOfWeek, DayOfWeekLabel> = {
  [DaysOfWeek.Sunday]: {
    full: 'Воскресенье',
    short: 'Вс',
  },
  [DaysOfWeek.Monday]: {
    full: 'Понедельник',
    short: 'Пн',
  },
  [DaysOfWeek.Tuesday]: {
    full: 'Вторник',
    short: 'Вт',
  },
  [DaysOfWeek.Wednesday]: {
    full: 'Среда',
    short: 'Ср',
  },
  [DaysOfWeek.Thursday]: {
    full: 'Четверг',
    short: 'Чт',
  },
  [DaysOfWeek.Friday]: {
    full: 'Пятница',
    short: 'Пт',
  },
  [DaysOfWeek.Saturday]: {
    full: 'Суббота',
    short: 'Сб',
  },
}

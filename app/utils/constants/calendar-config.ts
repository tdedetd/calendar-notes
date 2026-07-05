import { DaysOfWeek } from '@/app/enums/day-of-weeks.enum';
import { CalendarConfig } from '@/app/models/calendar-config.model';

export const calendarConfig = {
  firstDayOfWeek: DaysOfWeek.Monday,
} as const satisfies CalendarConfig;

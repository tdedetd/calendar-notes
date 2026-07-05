import { DaysOfWeek } from '@/app/enums/day-of-weeks.enum';
import { AllValuesWithoutDublicates } from '@/app/models/all-values-without-dublicates.model';

const daysOfWeekOrderTypeCheck = [
  DaysOfWeek.Sunday,
  DaysOfWeek.Monday,
  DaysOfWeek.Tuesday,
  DaysOfWeek.Wednesday,
  DaysOfWeek.Thursday,
  DaysOfWeek.Friday,
  DaysOfWeek.Saturday,
] as const satisfies DaysOfWeek[];

export const daysOfWeekOrder: AllValuesWithoutDublicates<
  DaysOfWeek, typeof daysOfWeekOrderTypeCheck
> = daysOfWeekOrderTypeCheck;

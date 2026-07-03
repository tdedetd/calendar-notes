const millisecondsInDay = 1000 * 60 * 60 * 24;

export function addDay(date: Date, days: number): Date {
  const time = date.getTime();
  return new Date(time + millisecondsInDay * days);
}

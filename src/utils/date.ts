const MINUTES = 60;
const HOUR_MINUTES_POSITIONS = 2;
export const hour = (date: Date): string => {
  const dateTemp = new Date(date);
  dateTemp.setHours(
    dateTemp.getHours() - dateTemp.getTimezoneOffset() / MINUTES,
  );
  return dateTemp
    .toISOString()
    .split('T')[1]
    .split(':')
    .splice(0, HOUR_MINUTES_POSITIONS)
    .join(':');
};

export const hour = (date: Date): string => {
  const dateTemp = new Date(date);
  dateTemp.setHours(dateTemp.getHours() - dateTemp.getTimezoneOffset() / 60);
  return dateTemp.toISOString().split('T')[1].split(':').splice(0, 2).join(':');
};

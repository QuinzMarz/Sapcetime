import { formatDate } from './formatDate';
import { DateDoDisplay } from './models';

export const formatEarthTime: (date: Date) => DateDoDisplay = (date) => {
  const padDateNum = (num: number) => num.toString().padStart(2, '0');
  const day: number = date.getDate();
  const month: number = date.getUTCMonth();
  const year: number = date.getFullYear();

  const earthTime = `${padDateNum(date.getHours())} : ${padDateNum(date.getMinutes())} : ${padDateNum(
    date.getSeconds()
  )}`;

  const earthDate: string = formatDate(day, month, year);

  const dateToDisplay = {
    time: earthTime,
    date: earthDate,
  };

  return dateToDisplay;
};

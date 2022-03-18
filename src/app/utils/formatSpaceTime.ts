import { SpaceTime } from '../hooks/useSpaceTime';
import { DateDoDisplay } from './models';

export const padDateNum = (num: number) => num.toString().padStart(2, '0');

export const formatSpaceTime: (date: SpaceTime['date']) => DateDoDisplay = (date) => {
  const spaceTime = `${padDateNum(date.hour)} : ${padDateNum(date.minute)} : ${padDateNum(date.second)}`;
  const spaceDate = `${padDateNum(date.day)} | ${padDateNum(date.month)} | ${date.year}`;

  const dateToDisplay = {
    time: spaceTime,
    date: spaceDate,
  };

  return dateToDisplay;
};

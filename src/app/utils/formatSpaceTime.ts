import { SpaceTime } from '../hooks/useSpaceTime';

export const formatSpaceTime: (date: SpaceTime['date']) => string = (date) => {
  const padDateNum = (num: number) => num.toString().padStart(2, '0');

  const spaceTime = `${padDateNum(date.hour)}:${padDateNum(date.minute)}:${padDateNum(date.second)}`;
  const spaceDate = `${padDateNum(date.day)}/${padDateNum(date.month)}/${date.year}`;

  return `${spaceDate} ${spaceTime}`;
};

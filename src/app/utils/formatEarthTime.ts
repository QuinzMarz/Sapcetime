export const formatEarthTime = (date: Date) => {
  const padDateNum = (num: number) => num.toString().padStart(2, '0');

  const earthTime = `${padDateNum(date.getHours())}:${padDateNum(date.getMinutes())}:${padDateNum(date.getSeconds())}`;
  const earthDate = `${padDateNum(date.getDay())}/${padDateNum(date.getMonth())}/${date.getFullYear()}`;

  return `${earthDate} ${earthTime}`;
};

export const formatDate: (day: number, month: number, year: number) => string = (day, month, year) => {
  const padDateNum = (num: number) => num.toString().padStart(2, '0');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${padDateNum(day)} ${months[month]} ${year}`;
};

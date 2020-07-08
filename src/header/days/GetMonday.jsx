
export default () => {
  const hourOfMs = 3600000;
  const daysOfMs = hourOfMs * 24;

  const days = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    0: 6,
  };

  const index = Object.keys(days).find((day) => +day === new Date().getDay());

  const lastMonday = new Date(new Date().getTime() - daysOfMs * days[index]);
  return lastMonday;
};


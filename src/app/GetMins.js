export const getMins = (time) => {
  let hours = 0;

  time.slice(0, 1) === "0"
    ? (hours = +time.slice(1, 2))
    : (hours = +time.slice(0, 2));

  return +time.slice(3, 5) + 60 * hours;
};

export const getDuration = (end, start) => {
  return getMins(end) - getMins(start) - 4;
};

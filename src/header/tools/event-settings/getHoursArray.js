export default () => {
  const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    return `${hours}:${minutes}`;
  };

  let value = -15;
  const minsArray = new Array(97).fill(15).map((hour) => {
    value = hour + value;
    return getTimeFromMins(value);
  });

  return minsArray;
};

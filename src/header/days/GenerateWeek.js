export default (monday) => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(
      new Date(new Date(monday).setDate(new Date(monday).getDate() + i))
    );
  }

  return week;
};

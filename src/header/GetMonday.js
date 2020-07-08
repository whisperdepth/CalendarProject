export default (date) => {
  const dayOfWeek = new Date(date).getDay();

  const differenceFromMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const monday = new Date(
    new Date(date).setDate(new Date(date).getDate() + differenceFromMonday)
  );

  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

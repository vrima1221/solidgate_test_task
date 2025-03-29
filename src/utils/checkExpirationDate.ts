export const checkExpirationDate = (value: string | undefined) => {
  if (!value) return false;
  console.log('DATE CHECK', value);
  

  const [month, year] = value.split("/").map(Number);
  if (!month || !year) return false;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the year
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based

  return year > currentYear || (year === currentYear && month >= currentMonth);
};
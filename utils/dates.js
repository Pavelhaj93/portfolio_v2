export function calculateCodingHours(startDate, endDate) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const millisecondsPerYear = 365 * millisecondsPerDay; // Number of milliseconds in a year

  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();

  const totalYears = (endTimestamp - startTimestamp) / millisecondsPerYear;

  const hoursPerDay = 8;
  const workingDaysPerWeek = 5;
  const workingWeeksPerYear = 50;

  const totalCodingHours =
    totalYears * workingWeeksPerYear * workingDaysPerWeek * hoursPerDay;

  return totalCodingHours;
}

export function calculateYearsAsDeveloper(startDate) {
  const currentDate = new Date();
  const startYear = startDate.getFullYear();
  const currentYear = currentDate.getFullYear();

  const yearsAsDeveloper = currentYear - startYear;

  // Adjust if the current date hasn't reached the start date anniversary yet
  if (
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate())
  ) {
    return yearsAsDeveloper - 1;
  }

  return yearsAsDeveloper;
}

function isWithinLastDays(dateString: string, days: number): boolean {
  const date = new Date(dateString);
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() - days);

  return date >= targetDate;
}

export default isWithinLastDays;

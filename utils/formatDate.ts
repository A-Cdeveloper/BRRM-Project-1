export const getYearFromDate = (dateString: string): string => {
  return new Date(dateString).getFullYear().toString();
};

export const getMonthYearFromDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // getMonth() vraća 0-11
  const year = date.getFullYear();
  return `${month}/${year}`;
};

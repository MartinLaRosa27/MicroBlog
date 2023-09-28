export const dateFormat = (date: string) => {
  let objectDate: Date = new Date(date);
  let day: any = objectDate.getDate();
  let month: any = objectDate.getMonth();
  let year: any = objectDate.getFullYear();

  if (day < 10) {
    month = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  const actualDate: string = `${day}/${month}/${year}`;
  return actualDate;
};

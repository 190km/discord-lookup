export function snowflakeToDate(id: string): Date {
  let temp: string = parseInt(id).toString(2);
  const length: number = 64 - temp.length;

  if (length > 0) {
    for (let i = 0; i < length; i++) {
      temp = "0" + temp;
    }
  }

  temp = temp.substring(0, 42);
  const date: Date = new Date(parseInt(temp, 2) + 1420070400000);

  return date;
}

export function checkValidSnowflake(id: string): string {
  if (/^\d{17,20}$/.test(id)) return id;
  else return "Invalid Discord ID";
}

import { MONTH_NAME, Period } from "./types";

export const getPeriodDate = (period: Period): { start: Date; end: Date } => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  let responseDate = getDateTimeAgo(7); // Default 7 days
  if (period === Period.Today) {
    responseDate = getDateTimeAgo(1);
  } else if (period === Period.Last7Days) {
    responseDate = getDateTimeAgo(7);
  } else if (period === Period.Last30Days) {
    responseDate = getDateTimeAgo(30);
  } else if (period === Period.Yesterday) {
    responseDate = { start: new Date(year, month, day - 1), end: new Date(year, month, day - 1, 23, 59, 59, 999) };
  } else if (period === Period.ThisMonth) {
    responseDate = { start: new Date(year, month, 1), end: new Date(year, month, day, 23, 59, 59, 999) };
  } else if (period === Period.LastMonth) {
    responseDate = { start: new Date(year, month - 1, 1), end: new Date(year, month, 0, 23, 59, 59, 999) };
  }
  return responseDate;
};

export const getDateTimeAgo = (dayBefore: number): { start: Date; end: Date } => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  if (dayBefore < 1) dayBefore = 1;
  const start: Date = new Date(year, month, day - dayBefore - 1);
  const end: Date = new Date(year, month, day, 23, 59, 59, 999);
  return { start, end };
};

export const formatDateString = (time: Date | number | string, format: string = "yyyy-mm-dd") => {
  let timestamp = new Date(time).getTime();
  if (!timestamp || !time) timestamp = Date.now();
  const date = new Date(timestamp);
  const year = String(date.getFullYear());
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const monthName = MONTH_NAME[date.getMonth() + 1];
  format = format.replace("yyyy", year);
  format = format.replace("mm", month);
  format = format.replace("mn", monthName);
  format = format.replace("dd", day);
  return format;
};

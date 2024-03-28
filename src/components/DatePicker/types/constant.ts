import { getPeriodDate } from "~/share/functions";
import { Period } from "~/share/types";

export const DATE_RANGE = [
  {
    title: "Custom",
    alias: "Custom",
    period: {
      start: new Date(),
      end: new Date(),
    },
  },
  {
    title: "Today",
    alias: "today",
    period: getPeriodDate(Period.Today),
  },
  {
    title: "Yesterday",
    alias: "yesterday",
    period: getPeriodDate(Period.Yesterday),
  },
  {
    title: "Last 7 days",
    alias: "last7days",
    period: getPeriodDate(Period.Last7Days),
  },
  {
    title: "This month",
    alias: "thisMonth",
    period: getPeriodDate(Period.ThisMonth),
  },
  {
    title: "Last 30 days",
    alias: "last30days",
    period: getPeriodDate(Period.Last30Days),
  },
  {
    title: "Last month",
    alias: "lastMonth",
    period: getPeriodDate(Period.LastMonth),
  },
];

import dayjs from "dayjs";

const today = dayjs().format("YYYYMMDD");
const todayFormatDash = dayjs().format("YYYY-MM-DD");
const currentHour = dayjs().get("hour") - 1;

export const todayData = {
  day: today,
  day_dash: todayFormatDash,
  hour: currentHour,
};

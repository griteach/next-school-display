import dayjs from "dayjs";

const today = dayjs().format("YYYYMMDD");
const todayFormatDash = dayjs().format("YYYY-MM-DD");
const tempHour = dayjs().get("hour");
const currentHour = tempHour < 10 ? `0` + tempHour : tempHour;

const todayData = {
  day: today,
  day_dash: todayFormatDash,
  hour: currentHour + "00",
};

export default todayData;

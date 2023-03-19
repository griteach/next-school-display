import dayjs from "dayjs";

const today = dayjs().format("YYYYMMDD");
const titleYear = dayjs().get("year");
const titleMonth = dayjs().get("month");
const titleDate = dayjs().get("date");

const getKoreanDay = (day: number) => {
  switch (day) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
  }
};
const titleDay = getKoreanDay(dayjs().get("day"));
const todayFormatDash = dayjs().format("YYYY-MM-DD");
const tempHour = dayjs().get("hour");
const currentHour = tempHour < 10 ? `0` + tempHour : tempHour;

const todayData = {
  day: today,
  day_dash: todayFormatDash,
  hour: currentHour + "00",
  tYear: titleYear,
  tMonth: titleMonth + 1,
  tDate: titleDate,
  tDay: titleDay,
};

export default todayData;

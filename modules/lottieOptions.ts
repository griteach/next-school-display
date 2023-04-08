//미세먼지 로띠에 파일 임포트
import LottieDustSmile from "../pages/lottie/dust/happy.json";
import LottieDustCrying from "../pages/lottie/dust/crying.json";
import LottieDustConfused from "../pages/lottie/dust/confused.json";
import LottieDustAwesome from "../pages/lottie/dust/awesome.json";

//주간날씨예보 로띠에 파일 임포트
import LottieMediumSunny from "../pages/lottie/weather/weather-day-clear-sky.json";
import LottieMediumWindy from "../pages/lottie/weather/weather-day-scattered-clouds.json";
import LottieMediumRain from "../pages/lottie/weather/weather-day-rain.json";
import LottieMediumSnow from "../pages/lottie/weather/weather-day-snow.json";
import LottieMediumCloudy from "../pages/lottie/weather/weather-day-mist.json";

//로딩 로띠에 파일 임포트
import LottieEtcLoading from "../pages/lottie/etc/loading.json";

//시계 로띠에 파일 임포트
import LottieClock from "../pages/lottie/etc/clock.json";

//working 공사중 파일 임포트
import LottieWorking from "../pages/lottie/etc/working.json";

////주간날씨예보
//맑음
export const mediumSunnyOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieMediumSunny,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
// 구름많음
export const mediumWindyOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieMediumWindy,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
//비
export const mediumRainOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieMediumRain,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

//snow
export const mediumSnowOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieMediumSnow,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
//cloudy
export const mediumCloudyOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieMediumCloudy,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

//메인화면 공사중... 아이콘 로띠에 옵션
export const workingOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieWorking,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

//미세먼지 아이콘 로띠에 옵션
export const dustCryingOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieDustCrying,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export const dustSmileOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieDustSmile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const dustConfusedOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieDustConfused,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const dustAwesomeOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieDustAwesome,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

//로딩 로띠에 옵션
export const etcLoadingOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieEtcLoading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

//시계 로띠에 옵션
export const clockOptions = {
  loop: true,
  autoplay: true,
  animationData: LottieClock,
  renderSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

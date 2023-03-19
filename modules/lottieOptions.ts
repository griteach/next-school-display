//미세먼지 로띠에 파일 임포트
import LottieDustSmile from "../pages/lottie/dust/happy.json";
import LottieDustCrying from "../pages/lottie/dust/crying.json";
import LottieDustConfused from "../pages/lottie/dust/confused.json";
import LottieDustAwesome from "../pages/lottie/dust/awesome.json";

//로딩 로띠에 파일 임포트
import LottieEtcLoading from "../pages/lottie/etc/loading.json";

//시계 로띠에 파일 임포트
import LottieClock from "../pages/lottie/etc/clock.json";

//working 공사중 파일 임포트
import LottieWorking from "../pages/lottie/etc/working.json";

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

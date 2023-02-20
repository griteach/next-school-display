import LottieDustSmile from "../pages/lottie/dust/happy.json";
import LottieDustCrying from "../pages/lottie/dust/crying.json";
import LottieDustConfused from "../pages/lottie/dust/confused.json";
import LottieDustAwesome from "../pages/lottie/dust/awesome.json";

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

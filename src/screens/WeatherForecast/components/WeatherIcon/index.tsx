import LottieView from "lottie-react-native";
import type { AnimatedLottieViewProps } from "lottie-react-native";

import { styles } from "./styles";
import { useEffect, useRef } from "react";

type WeatherGroup =
  | "clear-sky"
  | "broken-clouds"
  | "rain"
  | "thunderstorm"
  | "snow";

type IconSource = Record<
  WeatherGroup,
  (isDay: boolean) => AnimatedLottieViewProps["source"]
>;

const iconSource: IconSource = {
  "clear-sky": (isDay) => {
    return isDay
      ? require("./icons/day-clear-sky")
      : require("./icons/night-clear-sky");
  },
  "broken-clouds": (isDay) => {
    return isDay
      ? require("./icons/day-broken-clouds")
      : require("./icons/night-broken-clouds");
  },
  rain: (isDay) => {
    return isDay ? require("./icons/day-rain") : require("./icons/night-rain");
  },
  thunderstorm: (isDay) => {
    return isDay
      ? require("./icons/day-thunderstorm")
      : require("./icons/night-thunderstorm");
  },
  snow: (isDay) => {
    return isDay ? require("./icons/day-snow") : require("./icons/night-snow");
  },
};

function getWeatherGroup(code: number): WeatherGroup {
  switch (true) {
    case code === 800:
      return "clear-sky";
    case code > 800:
      return "broken-clouds";
    case code >= 600 && code <= 622:
      return "snow";
    case code >= 300 && code <= 531:
      return "rain";
    case code >= 200 && code <= 232:
      return "thunderstorm";
    default:
      return "clear-sky";
  }
}

interface Props {
  isDay: boolean;
  weatherCode: number;
}

export function WeatherIcon({ weatherCode, isDay }: Props) {
  const ref = useRef<LottieView>(null);

  const weatherGroup = getWeatherGroup(weatherCode);
  const source = iconSource[weatherGroup](isDay);

  useEffect(() => {
    // lottie autoplay doesn't work on iOS, this is a temporary workaround

    setTimeout(() => {
      ref.current?.play();
    }, 1000);
  }, [weatherCode, isDay]);

  return (
    <LottieView
      ref={ref}
      source={source}
      autoPlay={false}
      loop={true}
      resizeMode="cover"
      style={styles.icon}
    />
  );
}

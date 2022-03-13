import { WeatherProvider } from "./providers/WeatherProvider";
import { Routes } from "./routes";

export function Main() {
  return (
    <WeatherProvider>
      <Routes />
    </WeatherProvider>
  );
}

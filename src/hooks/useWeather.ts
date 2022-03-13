import { useContextSelector } from "use-context-selector";

import { WeatherContext } from "~/providers/WeatherProvider";

export function useWeather() {
  const weather = useContextSelector(WeatherContext, (ctx) => ctx.weather);
  const loading = useContextSelector(WeatherContext, (ctx) => ctx.loading);
  const loadWeather = useContextSelector(
    WeatherContext,
    (ctx) => ctx.loadWeather
  );

  return { weather, loading, loadWeather };
}

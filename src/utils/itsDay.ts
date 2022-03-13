interface Params {
  currentTime: number;
  sunset: number;
  sunrise: number;
}

export function itsDay({ currentTime, sunrise, sunset }: Params) {
  return currentTime > sunrise && currentTime < sunset;
}

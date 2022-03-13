export interface IWeather {
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  main: {
    humidity: number;
    temp: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
      id: number;
    }
  ];
  wind: {
    speed: number;
  };
}

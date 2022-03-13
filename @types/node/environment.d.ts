declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GCP_KEY: string;
      OPEN_WEATHER_KEY: string;
    }
  }
}

export {};

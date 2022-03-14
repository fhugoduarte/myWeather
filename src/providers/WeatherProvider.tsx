import { PropsWithChildren, useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import * as Location from "expo-location";

import { IWeather } from "~/entities/weather";
import { api } from "~/services/api";
import { showToast } from "~/components/feedback/Toast";

interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherContextType {
  weather?: IWeather;
  loading: boolean;

  loadWeather: (coordinates?: Coordinates) => Promise<void>;
}

export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
);

export function WeatherProvider({ children }: PropsWithChildren<{}>) {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<IWeather>();

  const getCurrentCoordinates = useCallback(async (): Promise<
    Coordinates | undefined
  > => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === Location.PermissionStatus.GRANTED) {
        const { coords } = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        return {
          lat: coords.latitude,
          lon: coords.longitude,
        };
      } else {
        showToast.warning("Permission to access location was denied");
      }
    } catch (error) {
      showToast.danger("Sorry, could not get your location");
    }
  }, []);

  const loadWeather = useCallback(async (coords?: Coordinates) => {
    try {
      setLoading(true);

      const coordinates = coords || (await getCurrentCoordinates());

      if (coordinates) {
        const { data } = await api.get<IWeather>("weather", {
          params: {
            lat: coordinates.lat,
            lon: coordinates.lon,
          },
        });

        setWeather(data);
      }
    } catch (error) {
      showToast.danger("Sorry, could not get the weather");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ loadWeather, weather, loading }}>
      {children}
    </WeatherContext.Provider>
  );
}

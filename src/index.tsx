import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import * as Location from "expo-location";

import { api } from "./services/api";

export function Main() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  const [weather, setWeather] = useState<any>();

  const getCurrentLocation = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === Location.PermissionStatus.GRANTED) {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { data } = await api.get("weather", {
        params: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        },
      });

      setWeather(data);
    }
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.city}>
        {weather.name}, {weather.sys.country}
      </Text>

      <View style={styles.card}>
        <Text style={styles.temperature}>{weather.main.temp}º</Text>
      </View>
    </View>
  );
}

const colors = {
  background: "#1f1f1f",
  mainShape: "#333333",
  text: "#b8b8b8",
  title: "#f5f5f5",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.mainShape,
  },
  temperature: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    color: colors.title,
  },
  city: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: colors.text,
  },
});

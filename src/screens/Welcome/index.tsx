import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useWeather } from "~/hooks/useWeather";

import { Text } from "~/components/typography/Text";
import { Button } from "~/components/touchable/Button";
import { WeatherStackParams } from "~/routes/weather.stack";

import { styles } from "./styles";

type Props = NativeStackScreenProps<WeatherStackParams, "Welcome">;

export function WelcomeScreen({ navigation }: Props) {
  const { weather, loading, loadWeather } = useWeather();

  useEffect(() => {
    if (weather) {
      navigation.navigate("WeatherForecast");
    }
  }, [weather]);

  function handleGetTheWeather() {
    loadWeather();
  }

  return (
    <LinearGradient colors={["#FFBF85", "#FF9385"]} style={styles.container}>
      <Text size="xlg" weight="bold" style={styles.title}>
        Discover the Weather
      </Text>

      <Text style={styles.description}>
        Get to know the weather anywhere in the world
      </Text>

      <Button
        title="Get the weather"
        accessibilityHint="Share your location and see the current weather"
        loading={loading}
        onPress={handleGetTheWeather}
      />
    </LinearGradient>
  );
}

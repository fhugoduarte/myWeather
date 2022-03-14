import { useCallback, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useWeather } from "~/hooks/useWeather";

import { Text } from "~/components/typography/Text";
import { Button } from "~/components/touchable/Button";

import { itsDay } from "~/utils/itsDay";
import { COLORS } from "~/styles";

import { WeatherStatus } from "./components/WeatherStatus";
import { BlurCard } from "./components/BlurCard";
import { SearchLocation } from "./components/SearchLocation";
import { WeatherIcon } from "./components/WeatherIcon";

import { styles } from "./styles";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getTodayText() {
  const date = new Date();
  return `Today, ${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

export function WeatherForecastScreen() {
  const { weather, loading, loadWeather } = useWeather();

  const isDay = useMemo(() => {
    if (weather) {
      return itsDay({
        currentTime: weather.dt,
        sunrise: weather.sys.sunrise,
        sunset: weather.sys.sunset,
      });
    }

    return true;
  }, [weather?.dt, weather?.sys]);

  const backgroundColors = useMemo(() => {
    return isDay
      ? [COLORS.dayLight, COLORS.dayDark]
      : [COLORS.nightLight, COLORS.nightDark];
  }, [isDay]);

  const windSpeedInKilometersPerHour = Math.round(
    (weather?.wind.speed || 0) * 3.6
  );
  const temperature = Math.round(weather?.main.temp || 0);

  const handleRefresh = useCallback(() => {
    loadWeather();
  }, [loadWeather]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="never"
      contentContainerStyle={styles.scrollStyle}
      scrollEnabled={false}
    >
      <LinearGradient
        colors={backgroundColors}
        start={{ x: 1.0, y: 0.5 }}
        end={{ x: 0.25, y: 1.0 }}
        style={styles.container}
      >
        <SearchLocation />

        <View style={styles.content}>
          <WeatherIcon
            isDay={isDay}
            weatherCode={weather?.weather[0].id || 0}
          />

          <BlurCard style={styles.card}>
            <View style={styles.cardContent}>
              <Text weight="medium">{getTodayText()}</Text>
              <Text size="sm">{`${weather?.name}, ${weather?.sys.country}`}</Text>

              <Text
                size="2xlg"
                weight="bold"
                style={styles.temperature}
                accessibilityLabel={`${temperature} degrees celsius`}
              >
                {temperature}º
              </Text>

              <Text size="lg" style={styles.description}>
                {weather?.weather[0].description}
              </Text>

              <WeatherStatus
                title="Wind"
                icon="wind"
                value={`${windSpeedInKilometersPerHour}km/h`}
                accessibilityLabel={`Wind speed: ${windSpeedInKilometersPerHour} kilometers per hour`}
              />

              <WeatherStatus
                title="Hum "
                icon="droplet"
                value={`${weather?.main.humidity}%`}
                accessibilityLabel={`Humidity: ${weather?.main.humidity} percent`}
              />
            </View>
          </BlurCard>
        </View>

        <Button
          title="Refresh"
          iconName="refresh-cw"
          accessibilityHint="Refresh your current weather"
          loading={loading}
          onPress={handleRefresh}
        />
      </LinearGradient>
    </ScrollView>
  );
}

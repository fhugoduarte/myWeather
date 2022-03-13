import { NavigationContainer } from "@react-navigation/native";

import { WeatherStack } from "./weather.stack";

export function Routes() {
  return (
    <NavigationContainer>
      <WeatherStack />
    </NavigationContainer>
  );
}

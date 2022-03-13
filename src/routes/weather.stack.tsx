import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WelcomeScreen } from "~/screens/Welcome";
import { WeatherForecastScreen } from "~/screens/WeatherForecast";

export type WeatherStackParams = {
  Welcome: undefined;
  WeatherForecast: undefined;
};

const Stack = createNativeStackNavigator<WeatherStackParams>();

export function WeatherStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />

      <Stack.Screen name="WeatherForecast" component={WeatherForecastScreen} />
    </Stack.Navigator>
  );
}

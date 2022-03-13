import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

import { Toast } from "~/components/feedback/Toast";

import { Main } from "./src";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <Main />
      <Toast />
    </>
  );
}

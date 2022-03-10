import { StatusBar } from "expo-status-bar";

import { Main } from "./src";

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <Main />
    </>
  );
}

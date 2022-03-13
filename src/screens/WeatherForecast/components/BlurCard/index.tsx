import { Platform } from "react-native";
import { BlurView, BlurViewProps } from "expo-blur";

import { styles } from "./styles";

export function BlurCard({ style, ...rest }: BlurViewProps) {
  return (
    <BlurView
      intensity={Platform.select({ android: 60, ios: 30 })}
      tint="light"
      style={[styles.card, style]}
      {...rest}
    />
  );
}

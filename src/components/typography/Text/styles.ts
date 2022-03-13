import { StyleSheet } from "react-native";

import { COLORS } from "~/styles";

export const styles = StyleSheet.create({
  text: {
    color: COLORS.text,
  },
  shadow: {
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
});

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { RADII } from "~/styles";

export const styles = StyleSheet.create({
  card: {
    borderRadius: RADII.md,
    borderWidth: RFValue(3),
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
});

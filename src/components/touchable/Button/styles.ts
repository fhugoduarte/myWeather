import { StyleSheet } from "react-native";

import { COLORS, RADII, SPACING } from "~/styles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.shapePrimary,

    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",

    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xlg,

    borderRadius: RADII.xlg,
  },

  content: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    marginLeft: SPACING.sm,
  },
});

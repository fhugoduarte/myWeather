import { StyleSheet } from "react-native";

import { COLORS, SPACING } from "~/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    width: "100%",
    alignItems: "center",
    marginVertical: SPACING.xsm,
  },
  leftWrapper: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "flex-end",
  },
  rightWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  icon: {
    marginRight: SPACING.xsm,
    textShadowColor: COLORS.shadow,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  separator: {
    marginHorizontal: SPACING.md,
  },
});

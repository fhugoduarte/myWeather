import { StyleSheet } from "react-native";

import { COLORS, SIZES, SPACING } from "~/styles";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",

    width: SIZES.lg,
    height: SIZES.lg,

    backgroundColor: COLORS.shapePrimary,

    alignItems: "center",
    justifyContent: "flex-end",

    borderRadius: SIZES.lg,

    elevation: 4,
  },
  input: {
    flex: 1,

    height: SIZES.lg,
    marginLeft: SPACING.xlg,
  },
  icon: {
    left: -1,
  },
  loadWrapper: {
    paddingHorizontal: SPACING.md,
  },
});

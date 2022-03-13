import { StyleSheet } from "react-native";

import { SPACING } from "~/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    padding: SPACING.lg,
  },
  title: {
    textAlign: "center",

    marginBottom: SPACING.md,
  },
  description: {
    textAlign: "center",
    marginBottom: SPACING.xlg,
  },
});

import { StyleSheet } from "react-native";
import { SPACING } from "~/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xlg,
    paddingTop: SPACING["2xlg"],
  },
  scrollStyle: {
    flex: 1,
  },
  content: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    top: -SPACING["2xlg"],

    padding: SPACING.md,
    marginHorizontal: SPACING.md,

    alignSelf: "stretch",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  temperature: {
    width: "100%",

    paddingVertical: SPACING.md,
    textAlign: "center",

    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 35,
  },
  description: {
    textTransform: "capitalize",
    marginBottom: SPACING.md,
  },
  buttonText: {
    marginRight: SPACING.sm,
  },
  // cityButton: {
  //   padding: 12,
  //   flexDirection: "row",
  // },
  // city: {
  //   fontFamily: "Inter_500Medium",
  //   fontSize: 14,
  //   color: colors.title,
  //   textShadowColor: "rgba(0, 0, 0, 0.75)",
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 10,
  // },
  // locationIcon: {
  //   textShadowColor: "rgba(0, 0, 0, 0.75)",
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 10,
  //   paddingHorizontal: RFValue(4),
  // },
  // card: {
  //   top: RFValue(-60),
  //   marginHorizontal: SPACING.md,
  // },
  // cardContent: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // icons: {
  //   marginRight: 6,
  //   textShadowColor: "rgba(0, 0, 0, 0.6)",
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 3,
  // },
  // dayText: {
  //   fontFamily: "Inter_500Medium",
  //   fontSize: 16,
  //   color: colors.title,
  //   textShadowColor: "rgba(0, 0, 0, 0.8)",
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 10,
  // },
  // infoRow: {
  //   flexDirection: "row",
  //   width: "100%",
  //   marginVertical: 4,
  // },
  // infoWrapperLeft: {
  //   flexDirection: "row",
  //   flex: 1,
  //   justifyContent: "flex-end",
  // },
  // infoWrapperRight: {
  //   flexDirection: "row",
  //   flex: 1,
  // },
  // infoText: {
  //   fontFamily: "Inter_500Medium",
  //   fontSize: 14,
  //   color: colors.title,
  //   textShadowColor: "rgba(0, 0, 0, 0.8)",
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 10,
  // },
  // separator: {
  //   fontFamily: "Inter_400Regular",
  //   fontSize: 14,
  //   color: colors.title,
  //   textShadowColor: "rgba(0, 0, 0, 0.8)",
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 10,
  //   marginHorizontal: 12,
  // },
  // description: {
  //   fontFamily: "Inter_500Medium",
  //   fontSize: 18,
  //   color: colors.title,
  //   textShadowColor: "rgba(0, 0, 0, 0.8)",
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 10,
  //   textTransform: "capitalize",
  //   marginBottom: 12,
  // },
  // temperature: {
  //   fontFamily: "Inter_700Bold",
  //   fontSize: 40,
  //   color: colors.title,
  //   paddingVertical: 16,
  //   width: "100%",
  //   textAlign: "center",
  //   textShadowColor: "rgba(0, 0, 0, 0.8)",
  //   textShadowOffset: { width: 3, height: 3 },
  //   textShadowRadius: 35,
  // },
  // content: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // button: {
  //   backgroundColor: "#FFFFFF",
  //   alignSelf: "center",
  //   paddingVertical: 18,
  //   paddingHorizontal: 42,
  //   borderRadius: 20,
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  // buttonText: {
  //   fontFamily: "Inter_700Bold",
  //   fontSize: 14,
  //   color: "#444E72",
  //   marginRight: 12,
  // },
});

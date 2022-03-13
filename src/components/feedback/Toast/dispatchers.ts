import { AccessibilityInfo } from "react-native";
import type { MessageOptions } from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

import { COLORS } from "~/styles";

const commonOptions: Omit<MessageOptions, "message"> = {
  autoHide: true,
  duration: 3000,
  hideOnPress: true,
  color: COLORS.text,
};

export const showToast = {
  info: (message: string) => {
    AccessibilityInfo.announceForAccessibility(message);

    return showMessage({
      message,
      icon: "info",
      backgroundColor: COLORS.info,
      type: "info",
      ...commonOptions,
    });
  },
  success: (message: string) => {
    AccessibilityInfo.announceForAccessibility(message);

    return showMessage({
      message,
      icon: "success",
      backgroundColor: COLORS.success,
      type: "success",
      ...commonOptions,
    });
  },
  warning: (message: string) => {
    AccessibilityInfo.announceForAccessibility(message);

    return showMessage({
      message,
      icon: "warning",
      backgroundColor: COLORS.warning,
      type: "warning",
      ...commonOptions,
    });
  },
  danger: (message: string) => {
    AccessibilityInfo.announceForAccessibility(message);

    return showMessage({
      message,
      icon: "danger",
      backgroundColor: COLORS.danger,
      type: "danger",
      ...commonOptions,
    });
  },
};

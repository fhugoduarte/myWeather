import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import type { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Text } from "~/components/typography/Text";
import { COLORS, FONT_SIZES } from "~/styles";

import { styles } from "./styles";

interface Props extends Omit<TouchableOpacityProps, "children" | "disabled"> {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  iconName?: keyof typeof Feather.glyphMap;
}

export function Button({
  title,
  loading = false,
  disabled = false,
  style,
  iconName,
  ...rest
}: Props) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isDisabled}
      accessibilityLabel={title}
      accessibilityRole="button"
      accessibilityState={{
        busy: loading,
        disabled,
      }}
      style={[styles.button, style, { opacity: isDisabled ? 0.7 : 1 }]}
      {...rest}
    >
      <View
        style={[styles.content, { opacity: +!loading }]}
        accessible={false}
        importantForAccessibility="no"
      >
        <Text color="textSecondary" weight="bold" applyShadow={false}>
          {title}
        </Text>

        {iconName && (
          <Feather
            name={iconName}
            size={FONT_SIZES.md}
            color={COLORS.textSecondary}
            style={styles.icon}
          />
        )}
      </View>

      {loading && (
        <ActivityIndicator
          accessibilityRole="progressbar"
          color={COLORS.textSecondary}
          style={StyleSheet.absoluteFill}
        />
      )}
    </TouchableOpacity>
  );
}

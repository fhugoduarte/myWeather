import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";

import { FONT_FAMILIES, FONT_SIZES, COLORS } from "~/styles";

import { styles } from "./styles";

interface Props extends TextProps {
  weight?: keyof typeof FONT_FAMILIES;
  size?: keyof typeof FONT_SIZES;
  color?: keyof typeof COLORS;
  applyShadow?: boolean;
}

export function Text({
  weight = "regular",
  size = "md",
  color = "text",
  applyShadow = true,
  style,
  ...rest
}: Props) {
  const fontFamily = FONT_FAMILIES[weight];
  const fontSize = FONT_SIZES[size];
  const textColor = COLORS[color];

  return (
    <RNText
      {...rest}
      style={[
        { fontFamily, fontSize, color: textColor },
        applyShadow ? styles.shadow : {},
        style,
      ]}
    />
  );
}

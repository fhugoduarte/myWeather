import { View, ViewProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Text } from "~/components/typography/Text";
import { COLORS, FONT_SIZES } from "~/styles";

import { styles } from "./styles";

interface Props extends Omit<ViewProps, "children"> {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  value: string;
  accessibilityLabel: string;
}

export function WeatherStatus({ title, icon, value, ...rest }: Props) {
  return (
    <View
      accessible
      importantForAccessibility="yes"
      accessibilityRole="text"
      style={styles.container}
      {...rest}
    >
      <View style={styles.leftWrapper}>
        <Feather
          name={icon}
          color={COLORS.text}
          size={FONT_SIZES.md}
          style={styles.icon}
        />
        <Text>{title}</Text>
      </View>

      <Text style={styles.separator}>|</Text>

      <View style={styles.rightWrapper}>
        <Text>{value}</Text>
      </View>
    </View>
  );
}

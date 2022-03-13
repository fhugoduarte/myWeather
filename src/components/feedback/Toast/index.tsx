import FlashMessage from "react-native-flash-message";
import type { FlashMessageProps } from "react-native-flash-message";

export { showToast } from "./dispatchers";
import { styles } from "./styles";

export function Toast({ style, ...rest }: FlashMessageProps) {
  return (
    <FlashMessage
      position="bottom"
      floating
      style={[styles.toast, style]}
      {...rest}
    />
  );
}

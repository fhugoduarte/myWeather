import { render } from "@testing-library/react-native";

import { COLORS, FONT_FAMILIES, FONT_SIZES } from "~/styles";

import { Text } from ".";

describe("Components | Typography => Text", () => {
  it("should render the text correctly", () => {
    const { getByText } = render(<Text>Hello World</Text>);

    expect(getByText(/hello world/i)).toBeTruthy();
  });

  it("should use the correct default styles", () => {
    const { getByText } = render(<Text>Hello World</Text>);

    expect(getByText(/hello world/i)).toHaveStyle({
      fontFamily: FONT_FAMILIES.regular,
      color: COLORS.text,
      fontSize: FONT_SIZES.md,
      textShadowColor: COLORS.shadow,
    });
  });

  it("should be able to change the 'fontFamily' when 'weight' prop is provided", () => {
    const { getByText } = render(<Text weight="bold">Hello World</Text>);

    expect(getByText(/hello world/i)).toHaveStyle({
      fontFamily: FONT_FAMILIES.bold,
    });
  });

  it("should be able to change the 'textColor' when 'color' prop is provided", () => {
    const { getByText } = render(<Text color="danger">Hello World</Text>);

    expect(getByText(/hello world/i)).toHaveStyle({
      color: COLORS.danger,
    });
  });

  it("should be able to change the 'fontSize' when 'size' prop is provided", () => {
    const { getByText } = render(<Text size="2xlg">Hello World</Text>);

    expect(getByText(/hello world/i)).toHaveStyle({
      fontSize: FONT_SIZES["2xlg"],
    });
  });

  it("should be able to hide the 'textShadow' when 'applyShadow' prop is 'false'", () => {
    const { getByText } = render(<Text applyShadow={false}>Hello World</Text>);

    expect(getByText(/hello world/i)).not.toHaveStyle({
      textShadowColor: COLORS.shadow,
    });
  });
});

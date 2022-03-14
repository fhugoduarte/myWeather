import { render } from "@testing-library/react-native";

import { Button } from ".";

describe("Components | Touchable => Button", () => {
  it("should render correctly", () => {
    const { getByA11yRole } = render(<Button title="Hello World" />);

    expect(getByA11yRole("button")).toBeTruthy();
  });

  it("should render 'title' correctly", () => {
    const { getByText } = render(<Button title="Hello World" />);

    expect(getByText(/hello world/i)).toBeTruthy();
  });

  it("should reduce 'opacity' when 'loading' prop is 'true'", () => {
    const { getByA11yRole } = render(<Button title="Hello World" loading />);

    expect(getByA11yRole("button")).toHaveStyle({ opacity: 0.7 });
  });

  it("should reduce 'opacity' when 'disabled' prop is 'true'", () => {
    const { getByA11yRole } = render(<Button title="Hello World" disabled />);

    expect(getByA11yRole("button")).toHaveStyle({ opacity: 0.7 });
  });

  it("should render a loader when 'loading' prop is 'true'", () => {
    const { getByA11yRole } = render(<Button title="Hello World" loading />);

    expect(getByA11yRole("progressbar")).toBeTruthy();
  });
});

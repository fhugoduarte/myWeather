import { render } from "@testing-library/react-native";
import { mocked } from "jest-mock";

import { useWeather } from "../../hooks/useWeather";
import { WelcomeScreen } from ".";

jest.mock("../../hooks/useWeather");

describe("Screens | Welcome", () => {
  it("should render correctly", () => {
    const useWeatherMocked = mocked(useWeather);

    useWeatherMocked.mockReturnValueOnce({
      weather: undefined,
    } as any);

    const tree = render(
      <WelcomeScreen navigation={{} as any} route={{} as any} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should redirect to WeatherForecastScreen when a weather is provided", () => {
    const navigateFunc = jest.fn();
    const useWeatherMocked = mocked(useWeather);

    useWeatherMocked.mockReturnValueOnce({
      weather: {},
    } as any);

    render(
      <WelcomeScreen
        navigation={{ navigate: navigateFunc } as any}
        route={{} as any}
      />
    );

    expect(navigateFunc).toHaveBeenCalledWith("WeatherForecast");
  });
});

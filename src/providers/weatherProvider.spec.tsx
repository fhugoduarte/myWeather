import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import * as Location from "expo-location";
import { mocked } from "jest-mock";

import { useWeather } from "~/hooks/useWeather";
import { api } from "../services/api";
import { WeatherProvider } from "./WeatherProvider";

jest.mock("expo-location");
jest.mock("../services/api");

describe("Providers |  WeatherProvider", () => {
  it("should start with correctly states", () => {
    const { result } = renderHook(() => useWeather(), {
      wrapper: WeatherProvider,
    });

    expect(result.current.weather).toBeUndefined();
    expect(result.current.loading).toBeFalsy();
  });

  it("should get user coordinates when 'loadWeather' is called without coordinates", async () => {
    const mockedGetCurrentCoordinates = jest.fn();
    const mockedLocation = mocked(Location);

    mockedLocation.requestForegroundPermissionsAsync.mockResolvedValueOnce({
      status: Location.PermissionStatus.GRANTED,
    } as any);
    mockedLocation.getCurrentPositionAsync.mockImplementationOnce(
      mockedGetCurrentCoordinates
    );

    const { result } = renderHook(() => useWeather(), {
      wrapper: WeatherProvider,
    });

    await waitFor(() => result.current.loadWeather());

    expect(mockedGetCurrentCoordinates).toHaveBeenCalledWith({
      accuracy: Location.Accuracy.High,
    });
  });

  it("should get the weather when Location permission is 'GRANTED'", async () => {
    const mockedGetApi = jest.fn().mockResolvedValueOnce({
      data: { validWeather: true },
    });

    const mockedLocation = mocked(Location);
    mocked(api.get).mockImplementationOnce(mockedGetApi);

    mockedLocation.requestForegroundPermissionsAsync.mockResolvedValueOnce({
      status: Location.PermissionStatus.GRANTED,
    } as any);
    mockedLocation.getCurrentPositionAsync.mockResolvedValueOnce({
      coords: {},
    } as any);

    const { result } = renderHook(() => useWeather(), {
      wrapper: WeatherProvider,
    });

    await waitFor(() => result.current.loadWeather());

    expect(result.current.weather).toEqual({
      validWeather: true,
    });
  });

  it("should not get the weather when Location permission is 'DENIED'", async () => {
    const mockedGetApi = jest.fn().mockResolvedValueOnce({
      data: { validWeather: true },
    });

    const mockedLocation = mocked(Location);
    mocked(api.get).mockImplementationOnce(mockedGetApi);

    mockedLocation.requestForegroundPermissionsAsync.mockResolvedValueOnce({
      status: Location.PermissionStatus.DENIED,
    } as any);
    mockedLocation.getCurrentPositionAsync.mockResolvedValueOnce({
      coords: {},
    } as any);

    const { result } = renderHook(() => useWeather(), {
      wrapper: WeatherProvider,
    });

    await waitFor(() => result.current.loadWeather());

    expect(result.current.weather).toBeUndefined();
  });

  it("should not user coordinates when 'loadWeather' is called with coordinates", async () => {
    const mockedGetCurrentCoordinates = jest.fn();
    const mockedLocation = mocked(Location);

    mockedLocation.requestForegroundPermissionsAsync.mockResolvedValueOnce({
      status: Location.PermissionStatus.GRANTED,
    } as any);
    mockedLocation.getCurrentPositionAsync.mockImplementationOnce(
      mockedGetCurrentCoordinates
    );

    const { result } = renderHook(() => useWeather(), {
      wrapper: WeatherProvider,
    });

    await waitFor(() => result.current.loadWeather({ lat: 1, lon: 1 }));

    expect(mockedGetCurrentCoordinates).not.toHaveBeenCalled();
  });

  it("should get the weather when correctly coordinates is provided to 'loadWeather'", async () => {
    const mockedGetApi = jest.fn().mockResolvedValueOnce({
      data: { validWeather: true },
    });

    mocked(api.get).mockImplementationOnce(mockedGetApi);

    const { result } = renderHook(() => useWeather(), {
      wrapper: WeatherProvider,
    });

    await waitFor(() => result.current.loadWeather({ lat: 1, lon: 1 }));

    expect(result.current.weather).toEqual({
      validWeather: true,
    });
  });
});

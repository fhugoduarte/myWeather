/**
 * This component may have a lot of responsibility.
 * It is directly using the provider.
 * I will not transform it into a global component yet, like a SearchInput that returns a callback with the text searched by the user.
 * In a larger project it would be nice to do this
 */

import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import {
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import axios from "axios";

import { useWeather } from "~/hooks/useWeather";
import { showToast } from "~/components/feedback/Toast";

import { COLORS, FONT_SIZES, SIZES, SPACING } from "~/styles";

import { styles } from "./styles";

const { width } = Dimensions.get("screen");
const PAGE_MARGIN = SPACING.lg * 2;
const maxWidth = width - PAGE_MARGIN;

interface Geocoding {
  results: [
    {
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
      };
    }
  ];
}

export function SearchLocation() {
  const { loadWeather } = useWeather();

  const searchValue = useRef("");
  const expandAnimation = useSharedValue(0);

  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const shouldClose = expanded && !isEmpty;

  useEffect(() => {
    expandAnimation.value = withTiming(+expanded, { duration: 300 });
  }, [expanded]);

  useEffect(() => {
    const subscription = Keyboard.addListener("keyboardDidHide", () =>
      setExpanded(false)
    );

    return () => Keyboard.removeSubscription(subscription);
  }, []);

  useEffect(() => {
    if (!expanded) {
      Keyboard.dismiss();
    }
  }, [expanded]);

  const searchByAddress = useCallback(async () => {
    if (!searchValue.current) {
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.get<Geocoding>(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address: searchValue.current,
            key: process.env.GCP_KEY,
          },
        }
      );

      const [{ geometry }] = data.results;
      loadWeather({ lat: geometry.location.lat, lon: geometry.location.lng });
    } catch (error) {
      showToast.danger("Sorry, could not find location");
    } finally {
      searchValue.current = "";
      setLoading(false);
      setExpanded(false);
    }
  }, []);

  function handleSearch() {
    if (isEmpty) {
      setExpanded(false);
    } else {
      searchByAddress();
    }
  }

  function toggleExpanded() {
    setExpanded((state) => !state);
  }

  const handleOnChangeText = useCallback((text: string) => {
    setIsEmpty(!text);
    searchValue.current = text;
  }, []);

  const contentStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(expandAnimation.value, [0, 1], [SIZES.lg, maxWidth]),
    };
  }, [expanded]);

  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      onPress={toggleExpanded}
    >
      <Animated.View style={[styles.content, contentStyle]}>
        <TextInput
          editable={!loading}
          placeholder="Search for a location"
          accessibilityState={{
            disabled: loading,
          }}
          onChangeText={handleOnChangeText}
          clearTextOnFocus
          autoCapitalize="sentences"
          returnKeyType="search"
          onSubmitEditing={searchByAddress}
          style={[styles.input, { display: expanded ? "flex" : "none" }]}
        />

        {loading ? (
          <ActivityIndicator
            size={FONT_SIZES.lg}
            color={COLORS.textSecondary}
            style={styles.loadWrapper}
            accessibilityLabel="Loading"
          />
        ) : (
          <TouchableOpacity
            accessibilityLabel={shouldClose ? "Close" : "Search"}
            accessibilityState={{
              disabled: !expanded,
            }}
            disabled={!expanded}
            onPress={handleSearch}
            style={styles.loadWrapper}
          >
            <Feather
              name={expanded && isEmpty ? "x" : "search"}
              accessibilityLabel={shouldClose ? "Close" : "Search"}
              size={FONT_SIZES.lg}
              color={COLORS.textSecondary}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

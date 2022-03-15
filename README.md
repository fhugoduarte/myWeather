
<p align="center">
<h2 align="center"> :cloud_with_lightning: My Weather  :cloud_with_lightning:</h2>
  <p align="center">
    <strong>:round_pushpin: Get to know the weather anywhere in the world :earth_americas:</strong>
    <br />
    <br />
    <a href="https://openweathermap.org/api">OpenWeather</a>
    ·
    <a href="https://github.com/fhugoduarte/myWeather/issues">Report Bug</a>
    ·
    <a href="https://github.com/fhugoduarte/myWeather/issues">Request Feature</a>
  </p>
</p>

## Contents

* [About the Project](#about-the-project)
  * [Features](#features)
  * [Built With](#built-with)
* [Getting Started](#getting-started)


## About The Project

This project has as its main goal to show weather conditions from anywhere in the world. The app uses colors, images and animations to make visualization of the information easier. The colors of the interfaces and icons change in accordance with local time and weather.

_The app communicates with [OpenWeather's API](https://openweathermap.org/api) to gather climate information. The search for other geolocations is achieved with GCP's [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)_

### Features

* [x] Shows weather conditions of the user's location. 
* [x] Shows weather conditions of a searched location. 
* [x] Shows information of: temperature, wind speed and humidity.



### Built With

- [React Native (Expo Managed Workflow)](https://github.com/expo/expo/tree/master/packages/expo)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Lottie](https://github.com/lottie-react-native/lottie-react-native#readme)
- [Axios](https://github.com/axios/axios)
- [Reanimated V2](https://docs.swmansion.com/react-native-reanimated/)
- [React Navigation](https://reactnavigation.org/)
- [Context API](https://pt-br.reactjs.org/docs/context.html)
- [Jest](https://jestjs.io/pt-BR/)
- [Testing Library](https://testing-library.com/)
  - [React Native](https://callstack.github.io/react-native-testing-library/)
  - [React Hooks](https://github.com/testing-library/react-hooks-testing-library#readme)



## Getting Started

To get a local copy up and running follow these simple steps.
 
1. Clone the repo
```sh
git clone https://github.com/fhugoduarte/myWeather.git
```
2. Install packages
```sh
yarn install
```
3. Create a new **.env** file on the root project and copy the **.env.example** file content.
```
GCP_KEY=
OPEN_WEATHER_KEY=
```
4. Generate a [Google Cloud Platform](https://developers.google.com/maps/documentation/geocoding/cloud-setup) key.

6. Add the key on **.env** file.

7. SignUp in [OpenWeather](https://home.openweathermap.org/users/sign_in) and generate an API key.

9. Add the key on **.env** file.

10. Run the expo project and generate a QrCode.
```sh
yarn start
```
4. Download ExpoGo app on your device
- https://expo.dev/client

5. Scan the QrCode on your phone.
- iOS: Scan the QrCode with the device camera.
- Android: Scan the QrCode with the ExpoGo app.

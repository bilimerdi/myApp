import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import image from "../../assets/weather.png";
import Weather from "../components/Weather";

const WeatherScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ opacity: 0.9, backgroundColor: "gray" }}
      >
        <View style={styles.weather}>
          <Weather></Weather>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  weather: {
    marginTop: 60,
  },
});
export default WeatherScreen;

import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import fetchWeatherData from "../api/fetchWeatherData";

const MenuWeather = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData();
      console.log(data);
      setWeatherData(data);
    };

    getWeatherData();
  }, []);

  const celsiusTemp = weatherData
    ? Math.round(weatherData.main.temp - 273.15)
    : null;

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text>Sıcaklık:</Text>
        <Text style={styles.temp}>{celsiusTemp}</Text>
        <Text style={styles.circle}>°</Text>
        <Text style={styles.symbol}>C</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Nem: </Text>
        <Text>{weatherData.main.humidity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MenuWeather;

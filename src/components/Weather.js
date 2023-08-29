import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import fetchWeatherData from "../api/fetchWeatherData";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData();
      setWeatherData(data);
    };

    getWeatherData();
  }, []);

  const celsiusTemp = weatherData
    ? Math.round(weatherData.main.temp - 273.15)
    : null;
  const feelsLikeTemp = weatherData
    ? (weatherData.main.feels_like - 273.15).toFixed(1)
    : null;

  const formatUnixTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString("tr-TR", {
      timeZone: "Asia/Istanbul",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <View>
      {weatherData ? (
        <View style={styles.container}>
          <Text style={styles.nameCity}>{weatherData.name}</Text>
          <Text style={styles.clock}>
            {weatherData.weather[0].description},{" "}
            {formatUnixTimestamp(weatherData.dt)}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.temp}>{celsiusTemp}</Text>
            <Text style={styles.circle}>°</Text>
            <Text style={styles.symbol}>C</Text>
          </View>
          <View style={styles.borderStyle}>
            <View style={styles.details}>
              <Text>Hissedilen Sıcaklık: </Text>
              <Text style={{ marginLeft: 90 }}>{feelsLikeTemp} °</Text>
            </View>
            <View style={styles.details}>
              <Text>Rüzgar: </Text>
              <Text style={{ marginLeft: 165 }}>
                {weatherData.wind.speed} m/s
              </Text>
            </View>
            <View style={styles.details}>
              <Text>Basınç: </Text>
              <Text style={{ marginLeft: 165 }}>
                {weatherData.main.pressure} hPa
              </Text>
            </View>
            <View style={styles.details}>
              <Text>Nem: </Text>
              <Text style={{ marginLeft: 178 }}>
                {weatherData.main.humidity}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <Text>Veri yükleniyor...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  nameCity: {
    fontSize: 100,
    marginBottom: 0,
  },
  clock: {
    marginTop: 0,
    marginBottom: 60,
    textDecorationStyle: "double",
  },
  temp: {
    fontSize: 80,
    marginBottom: 50,
  },
  circle: {
    fontSize: 60,
  },
  symbol: {
    fontSize: 80,
    marginLeft: 30,
  },
  borderStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    borderRadius: 10,
    borderWidth: 1,
    padding: 18,
  },
  details: {
    flexDirection: "row",
    margin: 2,
  },
});

export default Weather;

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import fetchWeatherData from "../api/fetchWeatherData";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData();
      setWeatherData(data);
      console.log(data);
    };

    getWeatherData();
  }, []);

  const celsiusTemp = (weatherData.main.temp - 273.15).toFixed(1);
  const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <View>
      {weatherData ? (
        <View>
          <Text>Hava durumu: {weatherData.weather[0].description}</Text>
          <Text>Sıcaklık: {celsiusTemp} Derece</Text>
          <Text>Rüzgar: {weatherData.wind.speed} m/s</Text>
          <Text>Şehir: {weatherData.name}</Text>
          <Text>Ülke: {weatherData.sys.country}</Text>
          <Text>Basınç: {weatherData.main.pressure} hPa</Text>
          <Image
            source={{ uri: iconUrl }}
            style={{ width: 50, height: 50 }}
          ></Image>
        </View>
      ) : (
        <Text>Veri yükleniyor...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Weather;

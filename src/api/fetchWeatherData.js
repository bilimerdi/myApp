import axios from "axios";

const API_KEY = "9d90b6742edf566063cc19bcc4dacbb2";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeatherData = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=Rize&appid=${API_KEY}&lang=tr`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Hava durumu verisi alınamadı:", error);
    return null;
  }
};

export default fetchWeatherData;

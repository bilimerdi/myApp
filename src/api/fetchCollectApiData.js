import axios from "axios";

const API_URL = "https://api.collectapi.com/sport/leaguesList";
const API_KEY = "apikey 7vGIKXC6HSPruQgD7WBRtU:3JcOh9njGMJkRqkMSuJkvO";

const headers = {
  "Content-Type": "application/json",
  Authorization: `apikey ${API_KEY}`,
};

const fetchLeaguesList = async () => {
  try {
    const response = await axios.get(API_URL, { headers });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Request Error:", error);
    return null;
  }
};

export default fetchLeaguesList;

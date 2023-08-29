import React, { useEffect, useState } from "react";
import fetchLeaguesList from "../api/fetchCollectApiData";
import { View, Text } from "react-native";

const FootballScreen = () => {
  const [rizesporInfo, setRizesporInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const leaguesData = await fetchLeaguesList();
      const rizespor = leaguesData.result.find(
        (team) => team.team === "Çaykur Rizespor"
      );

      if (rizespor) {
        setRizesporInfo(rizespor);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Çaykur Rizespor Bilgileri</Text>
      {rizesporInfo && (
        <View>
          <Text>Takım Adı: {rizesporInfo.team}</Text>
          <Text>Oynanan Maç: {rizesporInfo.play}</Text>
          <Text>Galibiyet: {rizesporInfo.win}</Text>
          <Text>Mağlubiyet: {rizesporInfo.lose}</Text>
          <Text>Beraberlik: {rizesporInfo.draw}</Text>
          <Text>Attığı Gol: {rizesporInfo.goalfor}</Text>
          <Text>Yediği Gol: {rizesporInfo.goalagainst}</Text>
          <Text>Averaj: {rizesporInfo.goaldistance}</Text>
          <Text>Puan: {rizesporInfo.point}</Text>
          <Text>Sıralama: {rizesporInfo.rank}</Text>
        </View>
      )}
    </View>
  );
};

export default FootballScreen;

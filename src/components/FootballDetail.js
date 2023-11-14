import React, { useEffect, useState } from "react";
import fetchLeaguesList from "../api/fetchCollectApiData";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FootballDetail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const leaguesData = await fetchLeaguesList();
      setData(leaguesData.result);
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.rank}>{item.rank}</Text>
      <Text style={styles.team}> {item.team}</Text>
      <Text style={styles.index}> {item.play}</Text>
      <Text style={styles.index}> {item.win}</Text>
      <Text style={styles.index}> {item.draw}</Text>
      <Text style={styles.index}> {item.lose}</Text>
      <Text style={styles.index}> {item.goalfor}</Text>
      <Text style={styles.index}> {item.goalagainst}</Text>
      <Text style={styles.index}> {item.goaldistance}</Text>
      <Text style={styles.index}> {item.point}</Text>
    </View>
  );

  return (
    <View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    flexDirection: "row",
    fontSize: 15,
  },
  team: {
    width: 180,
  },
  rank: {
    width: 20,
  },
  index: {
    width: 25,
    textAlign: "center",
  },
});

export default FootballDetail;

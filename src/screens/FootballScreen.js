import React, { useEffect, useState } from "react";
import fetchLeaguesList from "../api/fetchCollectApiData";
import { View, Text, StyleSheet } from "react-native";
import FootballDetail from "../components/FootballDetail";

const FootballScreen = () => {
  return (
    <View>
      <Text>Lig Tablosu</Text>
      <View style={styles.header}>
        <Text>Takım</Text>
        <Text>OM</Text>
        <Text>G</Text>
        <Text>B</Text>
        <Text>M</Text>
        <Text>AG</Text>
        <Text>YG</Text>
        <Text>A</Text>
        <Text>P</Text>
      </View>
      <FootballDetail></FootballDetail>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
});

export default FootballScreen;

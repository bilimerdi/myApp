import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PlacesDetail from "../components/PlacesDetail";

const PlacesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gezilecek yerler</Text>
      <PlacesDetail></PlacesDetail>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default PlacesScreen;

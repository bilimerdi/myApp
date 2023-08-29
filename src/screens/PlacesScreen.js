import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PlacesDetail from "../components/PlacesDetail";
import { Feather } from "@expo/vector-icons";

const PlacesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>Gezilecek yerler</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Feather name="log-out" style={styles.button}></Feather>
        </TouchableOpacity>
      </View>

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
  button: {
    fontSize: 30,
    marginTop: 5,
  },
});

export default PlacesScreen;

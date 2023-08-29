import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PlacesDetail from "../components/PlacesDetail";
import { Feather } from "@expo/vector-icons";

const PlacesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
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
  },
  text: {
    color: "white",
    fontSize: 20,
    marginLeft: 85,
  },
  button: {
    fontSize: 25,
    marginTop: 5,
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default PlacesScreen;

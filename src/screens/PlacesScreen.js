import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import PlacesDetail from "../components/PlacesDetail";
import { Feather } from "@expo/vector-icons";
import image from "../../assets/about.png";

const PlacesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.bar}>
          <Text style={styles.text}>Gezilecek yerler</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Feather name="log-out" style={styles.button}></Feather>
          </TouchableOpacity>
        </View>
        <PlacesDetail></PlacesDetail>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
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

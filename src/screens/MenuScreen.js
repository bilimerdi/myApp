import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Weather from "../components/Weather";

const MenuScreen = ({ navigation }) => {
  // const name = navigation.getParam("name");
  const name = "Erdi";
  const handleLogOut = () => {
    console.log(name);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={styles.frameName}>
          <Text style={styles.text}>HOŞGELDİN {name}</Text>
        </View>
        <View style={styles.frameButton}>
          <TouchableOpacity onPress={handleLogOut}>
            <Feather name="log-out" style={styles.button}></Feather>
          </TouchableOpacity>
        </View>
      </View>
      <Weather></Weather>
    </View>
  );
};

const styles = StyleSheet.create({
  frameName: {
    width: 270,
    backgroundColor: "red",
    padding: 9,
    borderRadius: 8,
    margin: 3,
  },
  frameButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 8,
    margin: 3,
  },
  text: {
    marginRight: 60,
    fontSize: 20,
  },
  button: {
    fontSize: 30,
    marginTop: 5,
  },
});

export default MenuScreen;

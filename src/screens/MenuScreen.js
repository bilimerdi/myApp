import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

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
          <Text>{name}</Text>
          <Text style={styles.text}>HOŞGELDİN</Text>
        </View>
        <View style={styles.frameButton}>
          <TouchableOpacity onPress={handleLogOut}>
            <Feather name="user" style={styles.button}></Feather>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Weather")}>
          <Text>Hava Durumunu öğren</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Places")}>
          <Text>Gezilecek Yerler</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Text>Rize Tarihi</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Football")}>
          <Text>Futbol Fikstür</Text>
        </TouchableOpacity>
      </View>
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
    margin: 3,
    marginTop: 10,
  },
  text: {
    marginRight: 60,
    fontSize: 20,
  },
  button: {
    color: "#171515",
    backgroundColor: "white",
    padding: 10,
    fontSize: 30,
    width: 50,
    borderRadius: 50,
  },
});

export default MenuScreen;

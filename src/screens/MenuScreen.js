import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuScreen = ({ navigation }) => {
  const name = navigation.getParam("name");

  const handleBas = () => {
    console.log(name);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "censter",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Text>HOŞGELDİN</Text>
        <TouchableOpacity onPress={handleBas}>
          <Text>Bas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MenuScreen;

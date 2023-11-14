import React from "react";
import {Text,View,StyleSheet,ImageBackground,TouchableOpacity,
} from "react-native";
import image from "../../assets/main_page1.png";
import { StatusBar } from "expo-status-bar";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.frameButton}>
          <TouchableOpacity
            style={styles.touchableText}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.text}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableText}onPress={() => navigation.navigate("LogUp")}>
            <Text style={styles.text}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  frameButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  touchableText: {
    padding: 10,
  },
});

export default MainScreen;

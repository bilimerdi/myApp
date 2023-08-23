import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import image from "../../assets/main_page.jpg";
const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <TouchableOpacity>
          <Text style={styles.text}>Giriş</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Kayıt Ol</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  textHeader: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 400,
  },
});

export default MainScreen;

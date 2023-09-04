import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/about.png")}>
        <View style={{ padding: 30, alignItems: "center" }}>
          <View style={styles.ImageBorderStyle}>
            <Image
              source={require("../../assets/developer.jpg")}
              style={styles.ImageStyle}
            />
            <Text style={styles.NameText}>Erdi ÖRÜN</Text>
            <Text>Junior React Native Developer</Text>
          </View>
          <View style={styles.BorderTextStyle}>
            <Text style={styles.AbountStyle}>
              RizeApp mobil uygulaması; Rize belediyesinde gördüğüm stajım için
              için hazırlanmıştır. Geliştiricinin sosyal medya hesabına ve
              uygulama kodlarına aşağıdaki linklerden ulaşabilirsiniz.
            </Text>
          </View>
          <View style={styles.IconStyle}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://twitter.com/erdiorun");
              }}
            >
              <Feather name="twitter" style={styles.TwitterStyle}></Feather>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://github.com/bilimerdi/English-TurkishQuizWord"
                );
              }}
            >
              <Feather name="github" style={styles.GitHubStyle}></Feather>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Menu")}
            style={styles.ButtonStyle}
          >
            <Text style={styles.ButtonTextStyle}>Ana Menüye Dön</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBorderStyle: {
    alignItems: "center",
    borderRadius: 10,
    marginTop: 0,
    marginBottom: 10,
  },
  ImageStyle: {
    width: 150,
    height: 150,
  },
  NameText: {
    fontSize: 30,
  },
  BorderTextStyle: {
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 20,
    marginBottom: 10,
  },
  AbountStyle: {
    textAlign: "center",
    fontSize: 18,
  },
  ButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 270,
    height: 70,
    borderRadius: 50,
  },
  ButtonTextStyle: {
    fontSize: 25,
  },
  TwitterStyle: {
    color: "#00acee",
    backgroundColor: "white",
    padding: 10,
    fontSize: 30,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
    marginBottom: 10,
  },
  GitHubStyle: {
    color: "#171515",
    backgroundColor: "white",
    padding: 10,
    fontSize: 30,
    width: 50,
    borderRadius: 50,
  },
  IconStyle: {
    flexDirection: "row",
  },
});

export default AboutScreen;

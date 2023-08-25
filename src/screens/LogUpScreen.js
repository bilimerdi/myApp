import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import image from "../../assets/log.png";
import jsonServer from "../api/jsonServer";

const LogUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogUp = async (newProfileData) => {
    try {
      const response = await jsonServer.post("/profile", newProfileData);
      Alert.alert("Başarılı", "Kaydınız başarılı bir şekilde oluşturuldu!");
    } catch (error) {
      console.error("Veri kaydedilemedi:", error);
    }
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderColor: "white",
            borderWidth: 0.4,
            padding: 20,
            paddingBottom: 0,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <View style={{ padding: 5 }}>
            <Text style={styles.text}>İsim:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="İsim Giriniz"
              value={name}
              onChangeText={(text) => setName(text)}
            ></TextInput>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={styles.text}>Email:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email Giriniz"
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={styles.text}>Şifre:</Text>
            <TextInput
              placeholder="Şifre Giriniz"
              style={styles.textInput}
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textNewAccount}>Kayıtlı mısınız?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.textSignUp}>SignIn</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handleLogUp({
                name: name,
                email: email,
                password: password,
              })
            }
          >
            <Text style={styles.textButton}>KAYIT OL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 220,
    padding: 2,
    color: "black",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    margin: 30,
    marginTop: 20,
    borderRadius: 10,
    width: 130,
  },
  textButton: {
    textAlign: "center",
    fontSize: 20,
  },
  textNewAccount: {
    color: "white",
    fontSize: 13,
    marginTop: 0,
  },
  textSignUp: {
    color: "white",
    fontSize: 13,
    marginTop: 0,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default LogUpScreen;

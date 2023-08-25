import React, { useState, useEffect } from "react";
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await jsonServer.get("/profile");
      const profiles = res.data;
      setData(profiles);
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleLogIn = () => {
    const user = data.find(
      (profile) => profile.email === email && profile.password === password
    );
    if (user) {
      Alert.alert("Başarılı", "Giriş başarıyla gerçekleşti!");
      navigation.navigate("Menu");
    } else {
      Alert.alert("Başarısız", "Giriş bilgileri hatalı.");
    }
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
            <Text style={styles.textNewAccount}>Kayıtlı değil misiniz?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LogUp")}>
              <Text style={styles.textSignUp}>SignUp</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogIn}>
            <Text style={styles.textButton}>GİRİŞ YAP</Text>
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

export default LoginScreen;

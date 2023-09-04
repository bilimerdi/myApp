import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import fetchLeaguesList from "../api/fetchCollectApiData";
import image from "../../assets/menu.jpg";
import image_fut from "../../assets/Çaykur_Rizespor_Logo.png";
import image_history from "../../assets/rize_history.jpg";

const MenuScreen = ({ navigation }) => {
  // const name = navigation.getParam("name");
  const [rizesporInfo, setRizesporInfo] = useState({});
  const menuItems = ["Çıkış Yap", "Hakkımda"];

  const handleMenuItemClick = (index) => {
    const menuItem = menuItems[index];
    switch (menuItem) {
      case "Çıkış Yap":
        navigation.navigate("Login");
        break;
      case "Hakkımda":
        navigation.navigate("About");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const leaguesData = await fetchLeaguesList();
      const rizespor = leaguesData.result.find(
        (team) => team.team === "Çaykur Rizespor"
      );

      if (rizespor) {
        setRizesporInfo(rizespor);
      }
    };

    fetchData();
  }, []);

  const name = "Erdi";
  const handleLogOut = () => {
    console.log(name);
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground source={image} style={styles.image}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View style={styles.frameName}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}>HOŞGELDİN</Text>
          </View>
          <View style={styles.frameButton}>
            <ModalDropdown
              options={menuItems}
              onSelect={(index, value) => handleMenuItemClick(index, value)}
            >
              <Feather name="user" style={styles.button}></Feather>
            </ModalDropdown>
          </View>
        </View>
        <ScrollView>
          <View style={styles.borderStyle}>
            <TouchableOpacity onPress={() => navigation.navigate("Weather")}>
              <Text>Hava Durumunu öğren</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderStyle}>
            <TouchableOpacity onPress={() => navigation.navigate("Places")}>
              <Text>Gezilecek Yerler</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderStyle}>
            <TouchableOpacity
              onPress={() => navigation.navigate("History")}
              style={styles.futTouch}
            >
              <Image source={image_history} style={styles.ımageFut}></Image>
              <Text>Rize Tarihi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderStyle}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Football")}
              style={styles.futTouch}
            >
              <Image source={image_fut} style={styles.ımageFut}></Image>
              <View>
                <Text>{rizesporInfo.team}</Text>
                <Text>Oynanan Maç: {rizesporInfo.play}</Text>
                <Text>Puan: {rizesporInfo.point}</Text>
                <Text>Sıralama: {rizesporInfo.rank}</Text>
                <Text>Galibiyet: {rizesporInfo.win}</Text>
                <Text>Mağlubiyet: {rizesporInfo.lose}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  frameName: {
    width: 270,
    padding: 9,
    borderRadius: 8,
    margin: 1,
    marginRight: 30,
  },
  frameButton: {
    margin: 3,
    marginTop: 10,
  },
  text: {
    marginRight: 60,
    fontSize: 35,
  },
  name: {
    fontSize: 25,
  },
  button: {
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 11,
    fontSize: 30,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 0.5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  borderStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 18,
    margin: 3,
  },
  ımageFut: {
    width: 100,
    height: 100,
    marginRight: 30,
  },
  futTouch: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MenuScreen;

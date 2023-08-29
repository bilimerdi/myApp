import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import image from "../../assets/sea.jpg";
import image1 from "../../assets/rize1.jpg";
import image2 from "../../assets/rize2.jpg";
import image3 from "../../assets/rize3.jpg";
import image4 from "../../assets/rize.png";
import jsonServer from "../api/jsonServer";

const HistoryScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  const handleImageChange = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const fetchData = async () => {
    try {
      const res = await jsonServer.get("/history");
      const responseData = res.data;
      setData(responseData[0]);
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.bar}>
          <View>
            <Text style={styles.name}>{data.name}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Feather name="log-out" style={styles.button}></Feather>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.contentContainer}>
          <View style={styles.fieldText}>
            <TouchableOpacity onPress={handleImageChange}>
              <Image
                source={images[currentImageIndex]}
                style={styles.imageRize}
              />
            </TouchableOpacity>
            <View>
              <View>
                <Text style={styles.header}>Tarihi</Text>
              </View>
              <Text style={styles.text}>{data.history1}</Text>
            </View>
            <View>
              <Text style={styles.text}>{data.history2}</Text>
            </View>
            <View>
              <View>
                <Text style={styles.header}>Etimoloji</Text>
              </View>
              <Text style={styles.text}>{data.eti}</Text>
            </View>
            <View>
              <View>
                <Text style={styles.header}>İklim</Text>
              </View>
              <Text style={styles.text}>{data.climate}</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
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
    justifyContent: "flex-start",
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  fieldText: {
    marginBottom: 20,
    textAlign: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 60,
    color: "white",
    marginLeft: 100,
  },
  text: {
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: 320,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: "white",
    margin: 3,
  },
  imageRize: {
    marginBottom: 3,
    borderRadius: 10,
    width: 320,
    height: 320,
  },
  header: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  button: {
    fontSize: 30,
    color: "white",
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default HistoryScreen;

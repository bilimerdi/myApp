import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import jsonServer from "../api/jsonServer";

const PlacesDetail = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await jsonServer.get("/places");
      const responseData = res.data;
      setData(responseData);
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>İsim: {item.name}</Text>
      <Text>Açıklama: {item.description}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default PlacesDetail;

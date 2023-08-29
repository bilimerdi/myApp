import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import jsonServer from "../api/jsonServer";

const ProductScreen = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [piece, setPiece] = useState("");
  const [price, setPrice] = useState("");

  const fetchData = async () => {
    try {
      const res = await jsonServer.get("/product");
      const responseData = res.data;
      setData(responseData);
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {data.map((item, index) => (
        <View key={index}>
          <Text>İsim: {item.name}</Text>
          <Text>Adet: {item.piece}</Text>
          <Text>Fiyat:{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default ProductScreen;

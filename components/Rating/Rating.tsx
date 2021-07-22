import { Image, View } from "react-native";
import * as React from "react";

export const Rating = ({ imdb_rating }: { imdb_rating: number }) => (
  <View style={{ display: "flex", flexDirection: "row" }}>
    {[...Array(Math.floor(imdb_rating / 2))].map((value, index) => (
      <Image
        key={index}
        source={require("../../assets/icons/star.png")}
        style={{ height: 15, width: 15 }}
      />
    ))}
    {imdb_rating - Math.floor(imdb_rating / 2) > 0.5 && (
      <Image
        source={require("../../assets/icons/half-star.png")}
        style={{ height: 15, width: 15 }}
      />
    )}
  </View>
);

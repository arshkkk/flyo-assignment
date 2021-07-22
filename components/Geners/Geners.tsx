import React from "react";
import { Text, View } from "react-native";

export const Geners = ({ geners }: { geners: Array<string> }) => (
  <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
    {geners.map((gener: string) => (
      <Text
        key={gener}
        style={{
          fontSize: 14,
          borderRadius: 100,
          borderColor: "#d3d3d3",
          borderWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 3,
          marginRight: 5,
        }}
      >
        {gener}
      </Text>
    ))}
  </View>
);

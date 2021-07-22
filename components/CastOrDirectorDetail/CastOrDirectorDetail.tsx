import { Text } from "react-native";
import React from "react";

export const CastOrDirectorDetail = ({
  label,
  items,
}: {
  label: string;
  items: Array<string> | string;
}) => (
  <>
    <Text
      style={{
        fontSize: 16,
        fontWeight: "500",
        textDecorationLine: "underline",
        marginTop: 5,
      }}
    >
      {label}
    </Text>

    <Text
      style={{
        fontSize: 14,
        textDecorationLine: "none",
      }}
    >
      {/*// director attribute can be a list or a string*/}
      {typeof items === "object"
        ? items.map((cast: string) => cast + " | ")
        : items}
    </Text>
  </>
);

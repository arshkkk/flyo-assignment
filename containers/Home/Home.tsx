import React, { useEffect } from "react";
import { Text } from "react-native";
import { MoviesList } from "./enhance";

export const HomeComponent = ({ movieReducerState, getMovies }: MoviesList) => {
  return <Text>{JSON.stringify(movieReducerState, null, 2)}</Text>;
};

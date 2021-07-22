import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MoviesList } from "../containers/MoviesList/enhance";
import { MovieDetail } from "../containers/MovieDetail";
export type StackParams = {
  "Movies List": undefined;
  "Movie Details": { id: string };
};
const Stack = createStackNavigator<StackParams>();

export const MoviesStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={"Movies List"} component={MoviesList} />
    <Stack.Screen name={"Movie Details"} component={MovieDetail} />
  </Stack.Navigator>
);

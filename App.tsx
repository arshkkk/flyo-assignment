import React from "react";
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// for react navigation
import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MoviesListPropType } from "./containers/MoviesList";
import { MovieDetail } from "./containers/MovieDetail";
import { FavouriteMovies } from "./containers/FavouriteMovies";
import { MoviesStackNavigator } from "./navigation/stackNavigator";

const Tab = createBottomTabNavigator();
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 10,
            left: 25,
            right: 25,
            backgroundColor: "white",
            borderRadius: 15,
            height: 70,
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.bottomNavIconWrapper}>
                <Image
                  style={styles.bottomIcon}
                  source={
                    focused
                      ? require("./assets/icons/movies-active.png")
                      : require("./assets/icons/movies-inactive.png")
                  }
                />
                <Text>"Movies</Text>
              </View>
            ),
          }}
          name="Home"
          component={MoviesStackNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.bottomNavIconWrapper}>
                <Image
                  style={styles.bottomIcon}
                  source={
                    focused
                      ? require("./assets/icons/heart-active.png")
                      : require("./assets/icons/heart-inactive.png")
                  }
                />
                <Text>Favourites</Text>
              </View>
            ),
          }}
          name="Favourite"
          component={FavouriteMovies}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  bottomNavIconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomIcon: {
    width: 25,
    height: 25,
  },
});

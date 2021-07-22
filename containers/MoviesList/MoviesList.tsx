import React, { useEffect } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
  SectionList,
  Text,
  View,
} from "react-native";
import { MoviesListPropType } from "./enhance";
import MovieCarasoul, {
  MovieCarasoulPropType,
} from "../../components/MovieCarasoul/MovieCarasoul";
import { MovieType } from "../../types/movie";

export const MoviesListComponent = ({
  movieReducerState,
  getMovies,
  navigation,
}: MoviesListPropType) => {
  const map = new Map();
  movieReducerState.movies.every((movie: MovieType) => {
    const { classification } = movie;
    if (!map.get(classification)) map.set(classification, []);

    map.set(classification, [...map.get(classification), movie]);
    return true;
  });
  let flatListData: Array<MovieCarasoulPropType> = [];

  const mapIterator = map.entries();
  while (true) {
    const entry = mapIterator.next().value;
    if (!entry) break;
    const [classificationText, movies] = entry;
    // @ts-ignore
    flatListData = [...flatListData, { classificationText, movies }];
  }

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "rgba(0,0,0,1)",
      }}
    >
      <FlatList<MovieCarasoulPropType>
        onRefresh={() => getMovies()}
        refreshing={movieReducerState.isLoading}
        data={flatListData}
        renderItem={({ item }: ListRenderItemInfo<MovieCarasoulPropType>) => (
          <MovieCarasoul {...item} navigation={navigation} />
        )}
        keyExtractor={(item: MovieCarasoulPropType) => item.classificationText}
      />
    </View>
  );
};

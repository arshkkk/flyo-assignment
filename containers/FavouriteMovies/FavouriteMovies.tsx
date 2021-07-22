import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StatusBar,
  Text,
  View,
} from "react-native";
import { MovieType } from "../../types/movie";
import { FavouriteMoviesPropType } from "./enhance";
import { Geners } from "../../components/Geners/Geners";

export const FavouriteMoviesComponent = ({
  movieReducerState,
}: FavouriteMoviesPropType) => {
  const likedMovies = movieReducerState.movies.filter((movie: MovieType) => {
    if (movie.isLiked) return true;
  });

  return (
    <View
      style={{
        width: "100%",
        // @ts-ignore
        paddingTop: StatusBar.currentHeight + 10,
        paddingBottom: 130,
        paddingHorizontal: 15,
      }}
    >
      <Text style={{ fontSize: 22, marginBottom: 15 }}>
        Your Favourite Movies
      </Text>
      {likedMovies.length === 0 ? (
        <Text>You have no favourite movie</Text>
      ) : (
        <FlatList<MovieType>
          data={likedMovies}
          renderItem={({
            item: { id, poster, title, genres },
          }: ListRenderItemInfo<MovieType>) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 10,
              }}
              key={id}
            >
              <Image
                source={{ uri: poster }}
                style={{ borderRadius: 20, height: 70, width: 70 }}
              />
              <View style={{ display: "flex", paddingLeft: 10 }}>
                <Text style={{ fontSize: 18 }}> {title}</Text>

                <Geners geners={genres} />
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: "#d3d3d3",
                marginBottom: 15,
              }}
            ></View>
          )}
          keyExtractor={(item: MovieType) => item.id}
        />
      )}
    </View>
  );
};

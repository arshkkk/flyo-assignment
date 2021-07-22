import React, { useEffect } from "react";
import {
  Image,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Linking,
  TouchableHighlight,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { MovieDetailsPropType } from "./enhance";
import { LinearGradient } from "expo-linear-gradient";
import { Rating } from "../../components/Rating/Rating";
import { CastOrDirectorDetail } from "../../components/CastOrDirectorDetail/CastOrDirectorDetail";
import { Geners } from "../../components/Geners/Geners";
import { unLikeMovie } from "../../store/actions/movieActions";

export const MovieDetailComponent = ({
  movieReducerState,
  unLikeMovie,
  likeMovie,
  //@ts-ignore
  route,
}: MovieDetailsPropType) => {
  const movie = movieReducerState.movies.find(
    (movie) => movie.id === route?.params?.id
  );
  if (!movie) return null;
  return (
    <View style={{ paddingBottom: 85 }}>
      <ScrollView>
        <View style={[styles.posterContainer, styles.shadow]}>
          <Image
            source={{ uri: movie?.backdrop }}
            resizeMode={"cover"}
            style={styles.posterImage}
          />
          <LinearGradient
            colors={[
              "transparent",
              "transparent",
              "transparent",
              "rgba(0,0,0,0.9)",
            ]}
            start={{ x: 0.0, y: 0 }}
            end={{ x: 0, y: 1.0 }}
            style={styles.posterDarkGradient}
          ></LinearGradient>
        </View>
        <View style={styles.primaryDetailsContainer}>
          <View style={styles.backdropImageWrapper}>
            <Image
              source={{ uri: movie.poster }}
              style={styles.backdropImage}
            />
          </View>
          <View style={styles.primaryContentWrapper}>
            <Text numberOfLines={2} style={styles.movieTitle}>
              {movie.title}
            </Text>
            <Text>
              {movie.released_on.slice(0, 4)}
              {" | "}
              {movie.classification}
              {" | "}
              {movie.length}
            </Text>
            <Rating imdb_rating={movie.imdb_rating} />
          </View>
        </View>
        <View style={styles.secondaryDetailsContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              textDecorationLine: "underline",
            }}
          >
            Overview
          </Text>
          <Text>{movie.overview}</Text>
          <CastOrDirectorDetail label={"Cast"} items={movie.cast} />
          <CastOrDirectorDetail label={"Director"} items={movie.director} />
          <Geners geners={movie.genres} />
          <View style={{ marginTop: 10 }}>
            <Button
              color={movie.isLiked ? "red" : "blue"}
              title={movie.isLiked ? "Unlike" : "Like"}
              onPress={() => {
                if (movie.isLiked) unLikeMovie(movie.id);
                else likeMovie(movie.id);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    position: "relative",
  },
  posterImage: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
  },
  posterDarkGradient: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
    position: "absolute",
  },

  //without poster all details
  contentWrapper: {
    paddingHorizontal: 100,
    backgroundColor: "blue",
    marginTop: -100,
  },

  // title, rating, backdrop ( main image )
  primaryDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: -100,
    marginHorizontal: 90,
  },
  backdropImageWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  backdropImage: {
    height: 200,
    width: 150,
    borderRadius: 10,
  },
  //primary details without backdrop
  primaryContentWrapper: {
    display: "flex",
    marginLeft: 10,
  },
  movieTitle: { fontSize: 24 },

  //secondary details
  secondaryDetailsContainer: {
    display: "flex",
    paddingHorizontal: 15,
    marginTop: 10,
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
});

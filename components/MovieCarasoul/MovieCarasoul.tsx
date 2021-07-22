import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ListRenderItemInfo,
} from "react-native";

import Carousel from "react-native-snap-carousel";
import { MovieType } from "../../types/movie";
import { Rating } from "../Rating/Rating";
import { MoviesListNavigationProp } from "../../containers/MoviesList/enhance";

const getClassificationText = (text: string) => {
  switch (text) {
    case "13+":
      return { text: "not for babies", color: "yellow" };
    case "18+":
      return { text: "only for adults", color: "red" };
    default:
      return { text: "anyone can watch", color: "green" };
  }
};
export interface MovieCarasoulPropType {
  classificationText: string;
  movies: Array<MovieType>;
  navigation: MoviesListNavigationProp;
}

export default class MovieCarasoul extends React.Component<
  MovieCarasoulPropType,
  { pressedMovie: string }
> {
  constructor(props: MovieCarasoulPropType) {
    super(props);
  }

  _renderItem({
    item,
    index,
    goTo,
  }: {
    item: MovieType;
    index: number;
    goTo: (id: string) => void;
  }) {
    return (
      <TouchableHighlight key={item.id} onPress={() => goTo(item.id)}>
        <View
          key={item.id}
          style={{
            backgroundColor: "floralwhite",
            display: "flex",
            borderRadius: 5,
            height: "auto",
            width: 300,
            marginLeft: 25,
            marginRight: 25,
            paddingBottom: 10,
          }}
        >
          <Image
            resizeMode="cover"
            source={{ uri: item.poster }}
            style={{ height: 400, width: 300 }}
          />
          <Text style={{ fontSize: 24, paddingHorizontal: 10 }}>
            {item.title}
          </Text>
          <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>
            IMDB: <Rating imdb_rating={item.imdb_rating} />
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
  goTo = (id: string) => {
    this.props.navigation.navigate("Movie Details", { id });
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.85)",
          paddingTop: 50,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 25,
            color: getClassificationText(this.props.classificationText).color,
            fontSize: 24,
          }}
        >
          {this.props.classificationText} ({" "}
          {getClassificationText(this.props.classificationText).text})
        </Text>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout={"default"}
            //@ts-ignore
            ref={(ref) => (this.carousel = ref)}
            data={this.props.movies}
            sliderWidth={100}
            itemWidth={300}
            renderItem={(props: ListRenderItemInfo<MovieType>) =>
              this._renderItem({
                ...props,
                goTo: this.goTo,
              })
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

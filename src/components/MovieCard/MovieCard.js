import React, { useState, useEffect } from "react";
import { Navigation } from "react-native-navigation";
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  // FlatList,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function MovieCard({ movie }) {
  console.log(movie);
  // const src=
  //   movie.poster_path
  //     ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
  //     : "/image-placeholder-vertical.jpg"

  const { poster_path, release_date, title } = movie;

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagePoster}
        source={{ uri: `https://image.tmdb.org/t/p/w342${poster_path}` }}
      />
      <Text>{title}</Text>
      {!!release_date ? <Text>{release_date}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
    marginTop: 10,
  },
  imagePoster: {
    width: 342 / 1.5,
    height: 523 / 1.5,
  },
});

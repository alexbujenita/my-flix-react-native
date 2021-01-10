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
import MovieCard from "../MovieCard/MovieCard";

export default function Homepage(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [btnDisable, setBtnDisable] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const BASE_URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=NOT_WORTH_USING_EXPO_&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=";

  useEffect(() => {
    fetch(BASE_URL + 1)
      .then((resp) => resp.json())
      .then((jsonData) => {
        setData(jsonData.results);
        setPage(jsonData.page);
        setTotalPages(jsonData.total_pages);
      })
      .catch(console.log);
  }, []);

  async function changePage(btnPressed) {
    try {
      setBtnDisable(true);
      const newPage = btnPressed === "next" ? page + 1 : page - 1;
      const resp = await fetch(BASE_URL + newPage);
      const jsonData = await resp.json();
      setData(jsonData.results);
      setPage(jsonData.page);
      setTotalPages(jsonData.total_pages);
      setBtnDisable(false);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(page);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => changePage("prev")}
          title="< prev"
          disabled={page === 1 && btnDisable}
        />
        <Button
          onPress={() => changePage("next")}
          id="next"
          title="next >"
          disabled={page === totalPages && btnDisable}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonEl: {
    paddingLeft: 10,
    width: 30,
    fontSize: 30,
  },
});

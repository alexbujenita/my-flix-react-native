import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Linking, StyleSheet, Text, View, Image } from "react-native";
// import Homepage from "./src/components/Homepage/Homepage";

import { NavigationContainer } from "@react-navigation/native";

export default function Initial(props) {
  console.log(props);
  function goToTMDb() {
    Linking.openURL("https://www.themoviedb.org/").catch(console.log);
  }

  return (
    <View style={styles.container}>
      <Button title="Start browsing" onPress={() => props.navigation.navigate("Homepage")} />
      <View style={styles.containerTMDb}>
        <Text style={styles.tmdbDisclaimer}>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </Text>
        <Button title="Visit TMDb" onPress={goToTMDb} />
      </View>
      <Image
        style={styles.tmdbLogo}
        source={require("../../../assets/tmdblogoscreen.png")}
      />
      <StatusBar style="auto" hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerTMDb: {
    top: 300,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tmdbLogo: {
    marginTop: 400,
    width: 85,
    height: 40,
    left: 100,
    bottom: 10,
  },
  tmdbDisclaimer: {
    fontSize: 18,
    fontWeight: "700",
  },
});

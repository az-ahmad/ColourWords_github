import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Styles } from "../styles/Styles";
import { TapGestureHandler } from "react-native-gesture-handler";

const Play = ({ navigation }) => {
  useEffect(() => {
    return setScore(0);
  }, []);
  const [score, setScore] = useState(0);
  const words = ["Red", "Blue", "Green", "Yellow"];
  const word = [...words[Math.floor(Math.random() * words.length)]].join("");
  const wordColors = ["#ea3636", "#0093fb", "#1fc733", "#eae236"];
  const wordColorsObject = {
    red: "#ea3636",
    blue: "#0093fb",
    green: "#1fc733",
    yellow: "#eae236",
  };
  const colorObject = Object.keys(wordColorsObject);
  const question =
    wordColorsObject[colorObject[(colorObject.length * Math.random()) << 0]];
  // const answer = Object.keys(wordColorsObject).find(
  //   (key) => wordColorsObject[key] === question
  // );

  const tapHandler = (colour) => {
    if (colour == question) {
      setScore(score + 1);
      console.log(score);
    } else {
      setScore(score - 1);
      if (score <= 0) {
        setScore("Game over");
        Alert.alert(
          "Game Over",
          "You lost all your lives",
          [{ text: "OK", onPress: () => navigation.navigate("Home") }],
          { cancelable: false }
        );
      }
    }
  };

  const buttons = wordColors.map((colour) => {
    return (
      <View
        key={colour}
        style={[Styles.gameButton, { backgroundColor: colour }]}
        onTouchStart={() => tapHandler(colour)}
      >
        <TouchableOpacity></TouchableOpacity>
      </View>
    );
  });

  return (
    <React.Fragment>
      <View style={Styles.container}>
        <ScrollView>
          <View style={{ marginTop: 150 }}>
            <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
              Score: {score}
            </Text>
            <Text style={[Styles.gameBlank, { color: question }]}>{word}</Text>
          </View>
        </ScrollView>
        <View>
          <View style={{ flexDirection: "row", width: "100%" }}>{buttons}</View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Play;

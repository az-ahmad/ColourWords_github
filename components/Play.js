import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert, FlatList } from "react-native";
import { Styles } from "../styles/Styles";
import Timer from "./timer";


const Play = ({ navigation }) => {
  // Playing state to check if the game is session or not
  const [ playing, setPlaying ] = useState(true);
  // Score state to track score
  const [ score, setScore ] = useState(0);
  // Lives state to track lives
  const [ lives, setLives ] = useState(3)
  // Array of words that are displayed
  const words = ["Red", "Blue", "Green", "Yellow"];
  // A random word chosen from the array of words
  const word = [...words[Math.floor(Math.random() * words.length)]].join("");
  // Differnt textcolors the word can be
  const wordColors = ["#ea3636", "#0093fb", "#1fc733", "#eae236"];
  // text color Object so they key/values can be matched together to determine correct/incorrect answers
  const wordColorsObject = {
    red: "#ea3636",
    blue: "#0093fb",
    green: "#1fc733",
    yellow: "#eae236",
  };

  // Takes a color from the object above and chooses a random one but retains the key
  const colorObject = Object.keys(wordColorsObject);
  const question = wordColorsObject[colorObject[(colorObject.length * Math.random()) << 0]];
// Scoring function, checks if the color of the button pressed matches the text colour of the displayed word
  const tapHandler = (colour) => {
    if (colour == question) {
      setScore(score + 1);
    } else if(lives == 1) {
      setLives(lives - 1);
      setPlaying(false)
        Alert.alert(
          "Game Over",
          "You lost all your lives",
          [{ text: "OK", onPress: () => navigation.navigate("Home") }],
          { cancelable: false }
        );
    } else {
      setLives(lives - 1);

    }
  };
// word displayed on screen with random font color
  let shownWord = <Text style={[Styles.gameBlank, { color: question}]}>{word}</Text>

  // can set diffuclty levels by making it more challenging as score increases
  if (score > 5) {
    shownWord = <Text style={[Styles.gameBlank, { color: question, textShadowColor: wordColorsObject[colorObject[(colorObject.length * Math.random()) << 0]], textShadowRadius: 5, textShadowOffset: {width: 0, height: 0}}]}>{word}</Text>

  }
  // Perform check to see game is active, if it is then show the content
  let content = null;
  if (playing) {
    content = (
      <React.Fragment>
        <View style={Styles.container}>
          <ScrollView>
            <View style={{ marginTop: 150 }}>
              {/* Timer has its own state and it interferred with the re-rendering of this component, had to seperate it.
                setPlaying passed through so can be set to false when timer is up,
                navigation passed so when user clicks ok after timer runs out they return to home screen*/}
              <Timer
                navigation={navigation}
                setPlaying={setPlaying}
                score={score}
                isPlaying = {playing}
              />
              <Text style={{ marginLeft: 'auto', marginRight: 'auto'}}>Lives: {lives}</Text>
              <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
                Score: {score}
              </Text>
              {/* Show a random word with a random text color, gets harder after after X score reached */}
              {shownWord}
            </View>
          </ScrollView>
        </View>
        <View>
          {/* Use React Native module FlatList to turn the array of colors into 'buttons', each has its own hex colour passed when through when tapped */}
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item}
            data={wordColors}
            renderItem={({ item }) => (
              <View
                style={
                  (Styles.gameButton,
                  {
                    backgroundColor: item,
                    flex: 1,
                    height: 150,
                    borderWidth: 0.5,
                  })
                }
                onTouchStart={() => tapHandler(item)}
              >
                <TouchableOpacity></TouchableOpacity>
              </View>
            )}
          />
        </View>
      </React.Fragment>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default Play;

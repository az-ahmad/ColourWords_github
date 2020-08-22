import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
  AsyncStorage,
} from "react-native";
import { Styles } from "../styles/Styles";
import Timer from "./timer";
import shuffle from "./shuffle";
import {LinearGradient} from 'expo-linear-gradient';


const Play = (props, { navigation }) => {
  // Playing state to check if the game is session or not
  const [playing, setPlaying] = useState(true);
  // Highscore state
  const [highscore, setHighscore] = useState(0);
  // Score state to track score
  const [score, setScore] = useState(0);
  // Lives state to track lives
  const [lives, setLives] = useState(3);
  // Array of words that are displayed
  const words = ["Red", "Blue", "Green", "Yellow"];
  // A random word chosen from the array of words
  const word = [...words[Math.floor(Math.random() * words.length)]].join("");
  // Array of words that are displayed
  const wordsBlind = ["Pink", "Light Blue", "Dark Blue", "Orange"];
  // A random word chosen from the array of words
  const wordBlind = [
    ...wordsBlind[Math.floor(Math.random() * wordsBlind.length)],
  ].join("");
  // Differnt textcolors the word can be
  const wordColors = ["#ea3636", "#0093fb", "#1fc733", "#eae236"];
  const wordColorsBlind = ["#56B4E9", "#CC79A7", "#E69F00", "#0072B2"];
  const colours = ["#0093fb", "#ea3636", "#eae236", "#1fc733"];
  const coloursBlind = ["#56B4E9", "#CC79A7", "#E69F00", "#0072B2"];

  // text color Object so they key/values can be matched together to determine correct/incorrect answers
  const wordColorsObject = {
    red: "#ea3636",
    blue: "#0093fb",
    green: "#1fc733",
    yellow: "#eae236",
  };

  const wordColorsBlindObject = {
    pink: "#CC79A7",
    lightblue: "#56B4E9",
    darkblue: "#0072B2",
    orange: "#E69F00",
  };

  // Takes a color from the object above and chooses a random one but retains the key
  const colorObject = Object.keys(wordColorsObject);
  const question =
    wordColorsObject[colorObject[(colorObject.length * Math.random()) << 0]];

  // Takes a color from the object above and chooses a random one but retains the key
  const colorObjectBlind = Object.keys(wordColorsBlindObject);
  const questionBlind =
    wordColorsBlindObject[
      colorObjectBlind[(colorObjectBlind.length * Math.random()) << 0]
    ];

  // Scoring function, checks if the color of the button pressed matches the text colour of the displayed word
  const tapHandler = (colour) => {
    if (colour == question || colour == questionBlind) {
      setScore(score + 1);
    } else if (lives == 1) {
      setLives(lives - 1);
      setPlaying(false);
      // Alert.alert(
      //   "Game Over",
      //   "You lost all your lives",
      //   [{ text: "OK", onPress: () => props.navigation.navigate("Home") }],
      //   { cancelable: false }
      // );
    } else {
      setLives(lives - 1);
    }
  };

  const isColourBlind = props.route.params.colourblind.colourblind.colourblind;

  let tappableButtons = (
    <View>
      {/* Use React Native module FlatList to turn the array of colors into 'buttons', each has its own hex colour passed when through when tapped */}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item}
        data={
          score > 10
            ? shuffle(isColourBlind ? wordColorsBlind : wordColors)
            : isColourBlind
            ? wordColorsBlind
            : wordColors
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => tapHandler(item)}
            style={[
              Styles.gameButton,
              {
                backgroundColor: item,
              },
            ]}
          >
            <View
              style={{ width: "100%", height: "100%" }}
              // onTouchStart={() => tapHandler(item)}
            ></View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  // word displayed on screen with random font color, adds random color shadow after X score
  let shownWord = (
    <Text
      style={
        score > 5
          ? [
              Styles.gameBlank,
              {
                color: isColourBlind ? questionBlind : question,
                textShadowColor: isColourBlind
                  ? wordColorsBlindObject[
                      colorObjectBlind[
                        (colorObjectBlind.length * Math.random()) << 0
                      ]
                    ]
                  : wordColorsObject[
                      colorObject[(colorObject.length * Math.random()) << 0]
                    ],
                textShadowRadius: 15,
                textShadowOffset: { width: 0, height: 0 },
              },
            ]
          : [
              Styles.gameBlank,
              { color: isColourBlind ? questionBlind : question },
            ]
      }
    >
      {isColourBlind ? wordBlind : word}
    </Text>
  );

  // Perform check to see game is active, if it is then show the content
  let content = null;
  if (playing) {
    content = (
      <React.Fragment>
        <View style={Styles.container}>
          <ScrollView>
            <View style={{ marginTop: 110 }}>
              {/* Timer has its own state and it interferred with the re-rendering of this component, had to seperate it.
                setPlaying passed through so can be set to false when timer is up,
                navigation passed so when user clicks ok after timer runs out they return to home screen*/}
              <Timer
                navigation={props.navigation}
                setPlaying={setPlaying}
                score={score}
                isPlaying={playing}
              />
              {/* Show a random word with a random text color, gets harder after after X score reached */}
              <Text
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 50,
                }}
              >
                {shownWord}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <Text
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 35,
              fontWeight: "bold",
            }}
          >
            ❤ {lives}
            {"                     "}
            <Text style={{ right: 0 }}>Score: {score}</Text>
          </Text>
          {tappableButtons}
        </View>
      </React.Fragment>
    );
  } else {
    try {
      AsyncStorage.getItem("highscore").then((result) => {
        setHighscore(result);
        if (score && score > result) {
          try {
            AsyncStorage.setItem("highscore", JSON.stringify(score));
          } catch (error) {
            // Error saving data
          }
        } else if (score && !result) {
          try {
            AsyncStorage.setItem("highscore", JSON.stringify(score));
          } catch (error) {
            // Error saving data
          }
        }
      });
    } catch (error) {
      // Error retrieving data
    }
    content = (
      <View style={[Styles.container, { paddingTop: "30%" }]}>
        <Text style={[Styles.title, { textAlign: "center" }]}>
          Color
          <Text style={{ color: isColourBlind ? coloursBlind[0] : colours[0] }}>
            W
          </Text>
          <Text style={{ color: isColourBlind ? coloursBlind[1] : colours[1] }}>
            o
          </Text>
          <Text style={{ color: isColourBlind ? coloursBlind[2] : colours[2] }}>
            r
          </Text>
          <Text style={{ color: isColourBlind ? coloursBlind[3] : colours[3] }}>
            d
          </Text>
          s
        </Text>
        <Text style={[Styles.autoMargin, { fontSize: 35, marginTop: "10%" }]}>
          Score: {score}
        </Text>
        <Text style={[Styles.autoMargin, { fontSize: 25, marginTop: 10 }]}>
          Highscore: {highscore}
        </Text>
        <TouchableOpacity
          style={[Styles.buttons, { marginTop: 50 }]}
          onPress={() => props.navigation.navigate("Home")}
        >
          {isColourBlind ? <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#56B4E9", "#CC79A7", "#E69F00", "#0072B2"]} style={Styles.linearGradient} >
          <Text style={Styles.buttonText}>Back</Text>
          </LinearGradient> : 
          <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#ea3636","#0093fb","#1fc733",  "#eae236"]} style={Styles.linearGradient} >
          <Text style={Styles.buttonText}>Back</Text>
          </LinearGradient>}
        </TouchableOpacity>
      </View>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default Play;

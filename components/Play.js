import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Styles } from "../syles/Styles";

const Play = () => {
  const words = ["Red", "Blue", "Green", "Yellow"];
  const word = words[Math.floor(Math.random() * words.length)];
  // const wordColors = ['Styles.gameRed', 'Styles.gameBlue', 'Styles.gameGreen', 'Styles.gameYellow']
  const wordColors = ["#ea3636", "#0093fb", "#1fc733", "#eae236"];
  const wordColor = wordColors[Math.floor(Math.random() * wordColors.length)];
  const lockedColor = [...wordColor]
  return (
    <React.Fragment>
      <View style={Styles.container}>
        <ScrollView>
          <View style={{ marginTop: 150 }}>
            <Text style={[Styles.gameBlank, { color: lockedColor.join('') }]}>{word}</Text>
            {console.log(lockedColor.join(''))}
          </View>
        </ScrollView>
        <View>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={Styles.gameButtonRed}>
              <TouchableOpacity>{/* <Text>BUTTON 1</Text> */}</TouchableOpacity>
            </View>
            <View style={Styles.gameButtonBlue}>
              <TouchableOpacity>{/* <Text>BUTTON 2</Text> */}</TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={Styles.gameButtonGreen}>
              <TouchableOpacity>{/* <Text>BUTTON 3</Text> */}</TouchableOpacity>
            </View>
            <View style={Styles.gameButtonYellow}>
              <TouchableOpacity>{/* <Text>BUTTON 4</Text> */}</TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Play;

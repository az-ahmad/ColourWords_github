import React, { useState } from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Styles } from "./styles/Styles";
import Play from "./components/Play";
import ErrorBoundary from "./ErrorBoundary";

// navigation prop was passed in from function App below, allows component to navigate
function HomeScreen({ navigation }) {
  const colours = ["#0093fb", "#ea3636", "#eae236", "#1fc733"];
  const coloursBlind = ["#56B4E9", "#CC79A7", "#E69F00", "#0072B2"];

  const [colourblind, setcolourblind] = useState(false);

  const onPressed = (colourblind) => {
      navigation.navigate('Play', {colourblind: {colourblind}})
  }

  return (
    <View style={Styles.container}>
      <View style={{ marginTop: "30%" }}>
        <Text style={Styles.title}>
          Color
          <Text style={{ color: colourblind ? coloursBlind[0] : colours[0] }}>
            W
          </Text>
          <Text style={{ color: colourblind ? coloursBlind[1] : colours[1] }}>
            o
          </Text>
          <Text style={{ color: colourblind ? coloursBlind[2] : colours[2] }}>
            r
          </Text>
          <Text style={{ color: colourblind ? coloursBlind[3] : colours[3] }}>
            d
          </Text>
          s
        </Text>
        <View style={{ marginTop: "20%" }}>
          {/* Buttons in React Native cant be styled, so TouchableOpacitys are made and used instead */}

          <TouchableOpacity
            style={Styles.buttons}
            onPress={() => onPressed({colourblind})}
          >
            <Text style={Styles.buttonText}>Play!</Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* Buttons in React Native cant be styled, so TouchableOpacitys are made and used instead */}

          <TouchableOpacity
            style={{
              backgroundColor: "#c7c7c7",
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 7,
              justifyContent: "center",
              borderWidth: 1,
            }}
            onPress={() => setcolourblind(!colourblind)}
          >
            <Text style={Styles.buttonText}>
              Colourblind Mode: {colourblind ? "ON" : "OFF"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// initalise Navigator
const Stack = createStackNavigator();

const Home = () => {
  return (
    // I was getting some error aboout error boundary, stackoverflow said make the ErrorBoundary component
    <ErrorBoundary>
      <NavigationContainer>
        {/* A header comes as default with the navigator, just set it to hidden */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* The pages that can be navigated to are declared here and referenced to */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Play" component={Play} />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default Home;

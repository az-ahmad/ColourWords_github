import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Styles } from "./styles/Styles";
import Play from "./components/Play";
import ErrorBoundary from "./ErrorBoundary";

// navigation prop was passed in from function App below, allows component to navigate
function HomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={{ marginTop: "30%" }}>
        <Text style={Styles.title}>
          Color<Text style={{ color: "#0093fb" }}>W</Text>
          <Text style={{ color: "#ea3636" }}>o</Text>
          <Text style={{ color: "#eae236" }}>r</Text>
          <Text style={{ color: "#1fc733" }}>d</Text>s
        </Text>
        <View style={{ marginTop: "20%" }}>

          {/* Buttons in React Native cant be styled, so TouchableOpacitys are made and used instead */}

          <TouchableOpacity
            style={Styles.buttons}
            onPress={() => navigation.navigate("Play")}
          >
            <Text style={Styles.buttonText}>Play!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// initalise Navigator 
const Stack = createStackNavigator();

export default function App() {
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
}

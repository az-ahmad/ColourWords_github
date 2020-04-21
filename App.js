import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Styles } from "./syles/Styles";
import Play from "./components/Play";

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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Play" component={Play} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Modal,
  TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Styles } from "./styles/Styles";
import Play from "./components/Play";
import ErrorBoundary from "./ErrorBoundary";
import {LinearGradient} from 'expo-linear-gradient';
import { color } from "react-native-reanimated";

// navigation prop was passed in from function App below, allows component to navigate
function HomeScreen({ navigation }) {
  const colours = ["#0093fb", "#ea3636", "#eae236", "#1fc733"];
  const coloursBlind = ["#56B4E9", "#CC79A7", "#E69F00", "#0072B2"];

  const [colourblind, setcolourblind] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onPressed = (colourblind) => {
    navigation.navigate("Play", { colourblind: { colourblind } });
  };

  return (
    <View style={Styles.container}>
      <View
        style={{ marginTop: "30%", marginLeft: "auto", marginRight: "auto" }}
      >
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
            onPress={() => onPressed({ colourblind })}
          >
                      {colourblind ? <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#56B4E9", "#CC79A7", "#E69F00", "#0072B2"]} style={Styles.linearGradient}><Text style={Styles.buttonText}>Play!</Text>
            </LinearGradient> : <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#0093fb", "#ea3636", "#eae236", "#1fc733"]} style={Styles.linearGradient} >

            <Text style={Styles.buttonText}>Play!</Text>
  </LinearGradient> }

          </TouchableOpacity>

          {/* Buttons in React Native cant be styled, so TouchableOpacitys are made and used instead */}

          <TouchableOpacity
            style={Styles.buttons}
            onPress={() => setcolourblind(!colourblind)}
          >
            {colourblind ? <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#CC79A7","#56B4E9","#0072B2",  "#E69F00"]} style={Styles.linearGradient} >
            <Text style={Styles.buttonText}>
              Colourblind Mode: {colourblind ? "ON" : "OFF"}
            </Text>
            </LinearGradient> :
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#ea3636","#0093fb","#1fc733",  "#eae236"]} style={Styles.linearGradient} >
            <Text style={Styles.buttonText}>
              Colourblind Mode: {colourblind ? "ON" : "OFF"}
            </Text>
  </LinearGradient> }
          </TouchableOpacity>

          {/* Buttons in React Native cant be styled, so TouchableOpacitys are made and used instead */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={Styles.centeredView}>
              <View style={Styles.modalView}>
                <Text style={Styles.modalText}>
                  Match the text colour itself, pay no attention to what the
                  word spells out!
                </Text>
                <Text style={Styles.modalText}>
                  {colourblind ?
                  <React.Fragment><Text style={{color:"#56B4E9",fontWeight:"bold",fontSize:25}}>PINK</Text>
                  <Text style={{fontWeight:"bold",fontSize:25}}> =   </Text>
                  <View style={{height:30,width:30, backgroundColor:"#56B4E9"}}></View>
                  <Text>✓{'     '}</Text>

                  <View style={{height:30,width:30, backgroundColor:"#CC79A7"}}></View>
                  <Text>X</Text></React.Fragment> : <React.Fragment><Text style={{color:"#0093fb",fontWeight:"bold",fontSize:25}}>RED</Text>
                  <Text style={{fontWeight:"bold",fontSize:25}}> =   </Text>
                  <View style={{height:30,width:30, backgroundColor:"#0093fb"}}></View>
                  <Text>✓{'     '}</Text>

                  <View style={{height:30,width:30, backgroundColor:"#ea3636"}}></View>
                  <Text>X</Text></React.Fragment>
                  }
                </Text>
                <Text style={Styles.modalText}>
                  It will get more difficult as you progress
                </Text>

                <TouchableOpacity
                  style={
                    Styles.buttons
                  }
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  {colourblind ? <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#0072B2", "#CC79A7","#56B4E9",  "#E69F00"]} style={Styles.linearGradient} >
            <Text style={Styles.buttonText}>Hide</Text>
            </LinearGradient> : <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#1fc733","#ea3636", "#0093fb", "#eae236"]} style={Styles.linearGradient} >
            <Text style={Styles.buttonText}>Hide</Text>
            </LinearGradient>}
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={Styles.buttons}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            {colourblind ? <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#0072B2", "#CC79A7","#56B4E9",  "#E69F00"]} style={Styles.linearGradient} >
            <Text style={Styles.buttonText}>How To Play</Text>
            </LinearGradient> : <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={["#1fc733","#ea3636", "#0093fb", "#eae236"]} style={Styles.linearGradient} >
            <Text style={Styles.buttonText}>How To Play</Text>
            </LinearGradient>}
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

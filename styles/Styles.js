import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    textShadowRadius: 2,
    textShadowColor: "#000",
  },
  buttons: {
    backgroundColor: "#c7c7c7",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    borderRadius: 7,
    height: "50%",
    justifyContent: "center",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
  gameBlank: {
    fontSize: 70,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowRadius: 1,
  },

  gameButton: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    height: 150,

  },
});

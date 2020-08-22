import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: RFPercentage(10),
    fontWeight: "bold",
    color: "#fff",
    textShadowRadius: 5,
    textShadowColor: "#000",
  },
  buttons: {
    backgroundColor: "#fff",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 7,
    justifyContent: "center",
    borderWidth: 2,
    marginBottom: 40,
    paddingTop: 0,
    paddingBottom: 0,
  },
  buttonText: {
    fontSize: RFPercentage(4.5),
    color: "#fff",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    textShadowRadius:5,
    textShadowColor: "#000"
  },
  gameBlank: {
    fontSize: RFPercentage(13),
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowRadius: 2,
  },
  gameButton: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    height: 150,
    borderWidth: 10,
    borderColor: "#fff",
    borderRadius: 30,
  },
  autoMargin: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#000",
    fontSize: RFPercentage(3),
  },
  linearGradient: {
    flex: 0,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  }
});

import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
                borderRadius: 7,
                justifyContent: "center",
                borderWidth: 1,
                marginBottom: 40,
                paddingTop: 10,
                paddingBottom: 10
  },
  buttonText: {
    fontSize: 27,
    color: "#fff",
    marginLeft: 'auto',
    marginRight:'auto'
  },
  gameBlank: {
    fontSize: 70,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowRadius: 2,
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
    flex: 1,
    height: 150,
    borderWidth: 0.5,
  },
  autoMargin: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#c7c7c7",
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 15

  }
});

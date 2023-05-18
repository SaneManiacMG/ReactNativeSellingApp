import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/background.jpg")}
        style={styles.imageBackground}
        resize="cover"
      />
      <Image
        source={require("./assets/logo-red.png")}
        style={styles.logoImage}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.startPageButton, { backgroundColor: "blue" }]}
        >
          <Text style={styles.bigButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.startPageButton, { backgroundColor: "purple" }]}
        >
          <Text style={styles.bigButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  logoImage: {
    width: 125,
    height: 125,
    top: "-25%",
  },
  startPageButton: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  bigButtonText: {
    color: "white",
    fontSize: 25,
  },
});

import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to my app :D</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        style={styles.button}
        title="Login in"
        onPress={() => navigation.navigate("Welcome", { username })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
  },
  input: {
    width: "80%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: "#cccccc",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;

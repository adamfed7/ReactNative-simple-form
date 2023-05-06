import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>Jan Kowalski</Text>
      <Text style={styles.profileTitle}>Software Engineer</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>jankowalski@gmail.com</Text>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoText}>(+48) 533 212 125</Text>
        <Text style={styles.infoLabel}>Address:</Text>
        <Text style={styles.infoText}>Kraków, ul. Św. Filipa 20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  infoLabel: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;

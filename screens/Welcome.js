import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const WelcomeScreen = ({ navigation, route }) => {
  const username = route.params.username;

  const [gallery, setGallery] = useState([]);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (!result.cancelled) {
      setGallery([...gallery, result.uri]);
    }
  };

  const removeImage = (index) => {
    const newGallery = [...gallery];
    newGallery.splice(index, 1);
    setGallery(newGallery);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {username} !</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Add photo</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.scrollView}>
        {gallery.map((imageUri, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => removeImage(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </View>
        ))}
        
      </ScrollView>

      <Button
        style={styles.button}
        title="Log out"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-end',
    marginBottom: -30,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;

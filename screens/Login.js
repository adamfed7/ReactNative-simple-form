import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="Login in"
        onPress={() =>
          navigation.navigate('Welcome')
        }
      />
    );
  };
  export default HomeScreen;
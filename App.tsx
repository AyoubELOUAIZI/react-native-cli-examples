/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{ fontSize: 30 }} >Hello, world!</Text>
    </View>
  );
};
export default App;

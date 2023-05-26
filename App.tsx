/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import * as React from 'react';
import { StyleSheet, Button, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <ImageBackground source={require("./background/HomeBackground.png")} style={styles.bgImage}>
        <Text>Home Screen</Text>
      <Button
        title="go to Ajou3D"
        onPress={() => navigation.navigate('Ajou3D')}
      />
      <Button
        title="go to AjouTrash"
        onPress={() => navigation.navigate('AjouTrash')}
      />
     </ImageBackground>
    </View>
  );
}

function Ajou3DScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ajou3D</Text>
    </View>
  );
}

function AjouTrashScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AjouTrash</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  header: {flex: 1},
  bgImage: {width: '100%', height: '100%'},
});
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ajou3D" component={Ajou3DScreen} />
        <Stack.Screen name="AjouTrash" component={AjouTrashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

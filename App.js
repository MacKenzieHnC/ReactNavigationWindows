/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const SomeScreen = ({route, navigation}) => {
  const [someValue, setSomeValue] = useState(route.params.initialValue);

  const incrementSomeValue = () => {
    setSomeValue(someValue + 1);
  };

  return (
    <View style={{alignItems: 'flex-end'}}>
      <Text style={{fontSize: 30}}>{someValue}</Text>
      <Button title={'Increment'} onPress={incrementSomeValue} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Some Screen"
          component={SomeScreen}
          initialParams={{initialValue: 1}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

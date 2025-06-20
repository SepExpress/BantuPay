import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MiniAppList, {miniApps} from './miniapps';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MiniAppList} />
        {miniApps.map(app => (
          <Stack.Screen
            key={app.name}
            name={app.name}
            component={app.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

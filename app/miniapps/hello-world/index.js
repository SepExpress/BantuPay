import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HelloWorld({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello from Mini App!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

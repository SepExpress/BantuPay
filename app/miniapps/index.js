import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';

export const miniApps = [
  {
    name: 'Hello World',
    component: require('./hello-world').default,
  },
];

export default function MiniAppList({navigation}) {
  return (
    <FlatList
      data={miniApps}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <View style={{padding: 16}}>
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate(item.name, {component: item.component})
            }
          />
        </View>
      )}
    />
  );
}

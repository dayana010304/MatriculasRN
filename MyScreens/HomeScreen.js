import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MyButton } from './MyButton';

export function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color:'#fff', fontSize:20, backgroundColor: 'black'}}>Bienvenidos al sistema de matriculas</Text>
        <MyButton props={props}/>
      </View>
    );
  }

export default HomeScreen;
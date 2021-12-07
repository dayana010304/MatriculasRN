import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MyButton } from './MyButton';

export function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color:'#fff', fontSize:20}}>Ir a formulario personas</Text>
        <MyButton props={props}/>
      </View>
    );
  }
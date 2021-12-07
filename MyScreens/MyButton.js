import * as React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

export function MyButton({props}) {
    return (
        <TouchableOpacity style={{marginTop:20, widt:50, height: 50, backgroundColor:'#ff5204', padding:10, alignItems:'center', borderRadius:5}} 
        onPress={()=>props.navigation.navigate('Notificacion')}>
          <Text style={{color:'#fff', fontSize:20}}>Ir a formulario personas</Text>
        </TouchableOpacity>
    );
  }
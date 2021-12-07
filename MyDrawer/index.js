// In App.js in a new project
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import s from './style';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { HomeScreen } from '../MyScreens/HomeScreen';
import { NotificacionScreen } from '../MyScreens/NotificacionScreen';


function DrawerMenu(props){
    return(
        <TouchableOpacity onPress={props.navigation}>
            <View style={s.menuContainer}>
                <View style={s.iconoContainer}>
                    <Icon size={17} name={props.iconName}/>
                </View> 
                <View style={s.tituloContainer}>
                    <Text style={s.tituloTxt}>{props.titleName}</Text>
                </View> 
            </View>
        </TouchableOpacity>
    )
    
}

function Menu(props){
    return(
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity>
                    <View style={s.userContainer}>
                        <Image style={s.userImagen} sourse={require('./icono-personas.png')}/>
                        <View>
                            <Image style={s.camaraIcon} sourse={require('./icono-personas.png')}/>
                        </View>
                    </View>
                    <View style={s.userNombre}>
                        <Text style={s.userTitulo} >Matriculas RN</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerMenu iconName='home' titleName='Home' navigation={()=>props.navigation.navigate('Home')}/>
            <DrawerMenu iconName='bell' titleName='Notificacion' navigation={()=>props.navigation.navigate('Notificacion')}/>
        </View>
    )
}
//const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notificacion" component={NotificacionScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer

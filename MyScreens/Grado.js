import React from "react";
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default class Grado extends React.Component
// antes del render van las funciones
{
  constructor(props)
  {
    super(props)
    // Ahora definimos las variables para la tabla persona de la base de datos MatriculasGrupoSabado
    this.state =
    {
    TextInput_id:'',
    TextInput_nombre:''
    }
  }
  //Ahora creamos las funciones de esta clase
  insertarGrado = () =>
  {

    // Ahora vamos a consumir la API: APIMatriculasGrupoSabado
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/insertarGrado.php',
    {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          id: this.state.TextInput_id,
          nombre: this.state.TextInput_nombre  
        }
      )  
    }
    ).then((response) => response.json())
      .then((responsejson) => 
      {
        alert(response.Json);

      }).catch((error) => 
      {
        console.error(error);
      }
      ); 
  }

  actualizarGrado = () =>
  {
  // Ahora vamos a codificar la funcion ACTUALIZAR para consumir la API
  fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/actualizarGrado.php',
    {
      method: 'PUT',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: this.state.TextInput_id,
          nombre: this.state.TextInput_nombre
        }
      )
    }
  ).then((response) => response.json())
    .then((responsejson) => 
    {
      alert('Actualizado');
    }
    ).catch((error) => 
    {
      console.error(error);
    }
    )
  }
  borrarGrado = () =>
  {
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/borrarGrado.php',
    {
      method: 'DELETE',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: this.state.TextInput_id
        }
      )
    }
      ).then((response) => response.json())
      .then((responsejson) => 
      {
        alert('Actualizado');
      }
      ).catch((error) => 
      {
        console.error(error);
      }
      )
    }


  listarGrado = () =>
  {
    fetch ('http://172.18.67.17/APImatriculasGrupoSabado/modelo/listarGrado.php',
    {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: this.state.TextInput_id,
          nombre: this.state.TextInput_nombre
        }
      )
    }
      ).then((response) => response.json())
        .then((responsejson)=> 
        {
          this.state(
          {
            TextInput_id: responsejson[0]['id'],
            TextInput_nombre: responsejson[0]['nombre'] 
          })
          
        })

  }

render()
  {
    return(
      <View style={MisEstilos.MainContainer}>
        <Text style= {{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Registo de Grado</Text>
          <TextInput placeholder="Ingrese el id"
          onChangeText = {TextInputValue => this.setState
          ({
            TextInput_id: TextInputValue
          })}
          underlineColorAndroid= 'transparent'
          style={MisEstilos.TextInputStyleClass}
          value= {this.state.TextInput_id}
          >
          </TextInput>
        <TextInput
        placeholder="Ingrese el nombre"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_nif: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_nombre}
        autoFocus={true}
        >
        </TextInput>
        
        <TouchableOpacity
          
          activityOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyleClass}
          onPress={this.insertarGrado}
        >
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Registrar</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const MisEstilos = StyleSheet.create (
    {
      MainContainer:
      {
        alignItems: 'center',
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff'
      },
      TextInputStyleClass:
      {
        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 5,
      },
      TouchableOpacityStyleClass:
      {
        paddingTop: 10,
        paddingBottom:5,
        borderRadius: 5,
        marginBottom: 7,
        width: '50%',
        backgroundColor: '#00BCD4'
      },
      TextStyle:
      {
        color: '#FFF',
        textAlign: 'center',
      },
      RowViewCointainer:
      {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      }
    }
  )
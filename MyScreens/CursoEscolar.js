import React from "react";
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default class CursoEscolar extends React.Component
// antes del render van las funciones
{
  constructor(props)
  {
    super(props)
    // Ahora definimos las variables para la tabla persona de la base de datos MatriculasGrupoSabado
    this.state =
    {
    TextInput_ano_inicio:'',
    TextInput_ano_fin:''
    }
  }
  //Ahora creamos las funciones de esta clase
  insertarCursoEscolar = () =>
  {

    // Ahora vamos a consumir la API: APIMatriculasGrupoSabado
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/insertarCursoEscolar.php',
    {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          ano_inicio: this.state.TextInput_ano_inicio,
          ano_fin: this.state.TextInput_ano_fin  
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

  actualizarCursoEscolar = () =>
  {
  // Ahora vamos a codificar la funcion ACTUALIZAR para consumir la API
  fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/actualizarCursoEscolar.php',
    {
      method: 'PUT',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
            ano_inicio: this.state.TextInput_ano_inicio,
            ano_fin: this.state.TextInput_ano_fin
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
  borrarCursoEscolar = () =>
  {
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/borrarCursoEscolar.php',
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

  listarTodoslosCursos = () =>
  {
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/ListarCursoEscolar.php',
    {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
            ano_inicio: this.state.TextInput_ano_inicio,
            ano_fin: this.state.TextInput_ano_fin
        }
      )
    }
      ).then((response) => response.json())
        .then((responsejson)=> 
        {
          this.state(
          {
            TextInput_ano_inicio: responsejson[0]['ano_inicio'],
            TextInput_ano_fin: responsejson[0]['ano_fin'] 
          })
          
        })

  }

render()
  {
    return(
      <View style={MisEstilos.MainContainer}>
        <Text style= {{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Registo de Curso Escolar</Text>
          <TextInput placeholder="Ingrese el año de Inicio"
          onChangeText = {TextInputValue => this.setState
          ({
            TextInput_id: TextInputValue
          })}
          underlineColorAndroid= 'transparent'
          style={MisEstilos.TextInputStyleClass}
          value= {this.state.TextInput_ano_inicio}
          >
          </TextInput>
        <TextInput
        placeholder="Ingrese el año a finalizar"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_nif: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_ano_fin}
        autoFocus={true}
        >
        </TextInput>
        
        <TouchableOpacity
          
          activityOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyleClass}
          onPress={this.insertarCursoEscolar}
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
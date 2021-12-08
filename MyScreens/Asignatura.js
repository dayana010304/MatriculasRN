import React from "react";
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default class Asignatura extends React.Component
// antes del render van las funciones
{
  constructor(props)
  {
    super(props)
    // Ahora definimos las variables para la tabla persona de la base de datos MatriculasGrupoSabado
    this.state =
    {
    TextInput_id:'',
    TextInput_nombre:'',
    TextInput_creditos: '',
    TextInput_tipo: '',
    TextInput_curso: '',
    TextInput_cuatrimestre: '',
    TextInput_id_profesor: '',
    TextInput_id_grado: ''
    }
  }
  //Ahora creamos las funciones de esta clase
  insertarAsignatura = () =>
  {

    // Ahora vamos a consumir la API: APIMatriculasGrupoSabado
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/insertarAsignatura.php',
    {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          id: this.state.TextInput_id,
          nombre: this.state.TextInput_nombre,
          creditos: this.state.TextInput_creditos,
          tipo: this.state.TextInput_tipo,
          curso: this.state.TextInput_curso,
          cuatrimestre: this.state.TextInput_cuatrimestre,
          id_profesor: this.state.TextInput_id_profesor,
          id_grado: this.state.TextInput_id_grado   
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

  actualizarAsignatura = () =>
  {
  // Ahora vamos a codificar la funcion ACTUALIZAR para consumir la API
  fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/actualizarAsignatura.php',
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
          nombre: this.state.TextInput_nombre,
          creditos: this.state.TextInput_creditos,
          tipo: this.state.TextInput_tipo,
          curso: this.state.TextInput_curso,
          cuatrimestre: this.state.TextInput_cuatrimestre,
          id_profesor: this.state.TextInput_id_profesor,
          id_grado: this.state.TextInput_id_grado
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
  borrarAsignatura = () =>
  {
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/borrarAsignatura.php',
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


  listarTodaslasAsignaturas = () =>
  {
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/listarAsignaturas.php',
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
          nombre: this.state.TextInput_nombre,
          creditos: this.state.TextInput_creditos,
          tipo: this.state.TextInput_tipo,
          curso: this.state.TextInput_curso,
          cuatrimestre: this.state.TextInput_cuatrimestre,
          id_profesor: this.state.TextInput_id_profesor,
          id_grado: this.state.TextInput_id_grado
        }
      )
    }
      ).then((response) => response.json())
        .then((responsejson)=> 
        {
          this.state(
          {
            TextInput_nombre: responsejson[0]['nombre'],
            TextInput_creditos: responsejson[0]['creditos'],
            TextInput_tipo: responsejson[0]['tipo'],
            TextInput_curso: responsejson[0]['curso'],
            TextInput_cuatrimestre: responsejson[0]['cuatrimestre'],
            TextInput_id_profesor: responsejson[0]['id_profesor'],
            TextInput_id_grado: responsejson[0]['id_grado']
          })
          
        })

  }


render()
  {
    return(
      <View style={MisEstilos.MainContainer}>
        <Text style= {{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Registo de Asignatura</Text>
          <TextInput placeholder="Ingrese ID personal"
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
        <TextInput
        placeholder="Ingrese cantidad de creditos"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_nombre: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_creditos}
        >
        
        </TextInput>
        <TextInput
        placeholder="Ingrese el tipo"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_Apellido1: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_tipo}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese el curso"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_Apellido2: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_curso}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese el cuatrimestre"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_ciudad: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_cuatrimestre}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese id del Profesor"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_clave: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_id_profesor}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese el id del grado"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_direccion: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_id_grado}
        >
        </TextInput>
        <TouchableOpacity
          
          activityOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyleClass}
          onPress={this.insertarAsignatura}
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
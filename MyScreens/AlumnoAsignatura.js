import React from "react";
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default class AlumnoAsignatura extends React.Component
// antes del render van las funciones
{
  constructor(props)
  {
    super(props)
    // Ahora definimos las variables para la tabla persona de la base de datos MatriculasGrupoSabado
    this.state =
    {
    TextInput_id_alumno:'',
    TextInput_id_asignatura:'',
    TextInput_id_curso_escolar: ''
    }
  }
  //Ahora creamos las funciones de esta clase
  insertarMatricula = () =>
  {

    // Ahora vamos a consumir la API: APIMatriculasGrupoSabado
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/InsertarAlumnoMatricula.php',
    {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          id_alumno: this.state.TextInput_id_alumno,
          id_asignatura: this.state.TextInput_id_asignatura,
          id_curso_escolar: this.state.TextInput_id_curso_escolar   
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

  actualizarMatricula = () =>
  {
  // Ahora vamos a codificar la funcion ACTUALIZAR para consumir la API
  fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/actualizarAlumnoAsignatura.php',
    {
      method: 'PUT',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id_alumno: this.state.TextInput_id_alumno,
          id_asignatura: this.state.TextInput_id_asignatura,
          id_curso_escolar: this.state.TextInput_id_curso_escolar
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
  borrarMatricula = () =>
  {
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/borrarAlumnoAsignatura.php',
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


  listarMatriculas = () =>
  {
    fetch ('http://192.168.1.5/APImatriculasGrupoSabado/modelo/listarAlumnosAsignaturas.php',
    {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id_alumno: this.state.TextInput_id_alumno,
          id_asignatura: this.state.TextInput_id_asignatura,
          id_curso_escolar: this.state.TextInput_id_curso_escolar
        }
      )
    }
      ).then((response) => response.json())
        .then((responsejson)=> 
        {
          this.state(
          {
            TextInput_id_alumno: responsejson[0]['id_alumno'],
            TextInput_id_asignatura: responsejson[0]['id_asignatura'],
            TextInput_id_curso_escolar: responsejson[0]['id_curso_escolar'],
          })
          
        })

  }


render()
  {
    return(
      <View style={MisEstilos.MainContainer}>
        <Text style= {{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Matriculas por Asignatura</Text>
        <TextInput
        placeholder="Ingrese el id del Alumno"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_nif: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_id_alumno}
        autoFocus={true}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese id de la Asignatura"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_nombre: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_id_asignatura}
        >
        </TextInput>
        <TextInput
        placeholder="ingrese el id del curso"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_Apellido1: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_id_curso_escolar}
        >
        </TextInput>
        <TouchableOpacity
          
          activityOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyleClass}
          onPress={this.insertarMatricula}
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
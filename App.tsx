import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>APLICACIÓN</Text>
      <Text style={styles.subtitle}>Adrian SI VALIO, CHATOOO</Text>

      <Text style={{ fontSize:50}}>APLICACIÓN</Text>
      <Text style={styles.Text} >Jonathan</Text>
    

      <Text style={styles.txt}>Juan Paz</Text>



      <Text style={{ fontSize:50}}>James 😎</Text>
    <Text style={styles.textito}>Elianaaaaaaaaaaaaaa</Text>

    <Text style={ {fontSize: 30}}> Randy </Text>
    
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#008080', // color de fondo
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // color del texto
  },
  subtitle: {
    fontFamily: 'Times New Roman',
    fontSize: 35,
    color: '#000000', // color del texto secundario
  },
  Text:{
    color:'#0df2c9'
  },
  txt:{
    color: '#b8b8ff',
    fontSize:40
  },
  text:{
  fontSize:50,
  color: 'white'
  },
  textito:{
  fontSize: 50,
  color: 'pink',
  
  }
});
    
  
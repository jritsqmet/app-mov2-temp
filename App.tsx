import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:50}}>APLICACIÓN</Text>
<<<<<<< HEAD
      <Text style={styles.Text} >Jonathan</Text>
=======
     
      <Text style={styles.txt}>Juan Paz</Text>

>>>>>>> 1521ce88246d9bd9e9eabed6b13c6285a473b1bf

      <Text style={{ fontSize:50}}>James 😎</Text>
    <Text style={styles.textito}>Elianaaaaaaaaaaaaaa</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  Text:{
    color:'#0df2c9'
  },
  txt:{
    color: 'blue',
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
  })
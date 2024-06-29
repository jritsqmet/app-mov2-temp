import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:50}}>APLICACIÓN</Text>
     
      <Text style={styles.txt}>Juan Paz</Text>


      <Text style={{ fontSize:50}}>James 😎</Text>
    <Text style={styles.textito}>Elianaaaaaaaaaaaaaa</Text>
      <StatusBar style="auto" />

      <text style={{ fontSize:45}}> Randy </text>
      <StatusBar style='auto'/>
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
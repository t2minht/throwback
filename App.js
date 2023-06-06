import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import NavBar from './components/NavBar';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavBar style = {{}}/>
      <View style={styles.textbox}>
        <TextInput
          placeholder='Title'
        ></TextInput>
      </View>
      <View style={styles.textbox}>
        <TextInput
          placeholder="How's your day been?"
        ></TextInput>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  textbox: {
    borderColor: '#000000',
    borderWidth: '2px',
    width: '90%',
    marginTop: 20
  }
});

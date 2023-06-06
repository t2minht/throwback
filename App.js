import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import NavBar from './components/NavBar';
import SliderBar from './components/SliderBar';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}
    keyboardShouldPersistTaps='handled'
    >
      <StatusBar style="light" />
      <NavBar style = {{}}/>
      <View style={styles.textboxTitle}>
        <TextInput
          style = {{fontSize: 20}}
          placeholder='Title'
          textAlign='center'
          textAlignVertical='center'
          
        ></TextInput>
      </View>
      <View style={styles.textboxNotes}>
        <TextInput
          placeholder="How's your day been?"
          style = {{fontSize: 15}}
          multiline
          numberOfLines={4}
          flex= {1}
        ></TextInput>
      </View>

      <SliderBar />


      
    </ScrollView>
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
  textboxTitle: {
    borderColor: '#000000',
    borderWidth: '2px',
    width: '90%',
    marginTop: 20,
    height: 40,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 15
  },
  textboxNotes: {
    borderColor: '#000000',
    borderWidth: '2px',
    width: '90%',
    marginTop: 20,
    height: 200,
    borderRadius: 15,
    paddingLeft: 13,
    paddingTop: 10
    
  }
});

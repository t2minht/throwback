import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import NavBar from './components/NavBar';
import SliderBar from './components/SliderBar';
import { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as SQLite from 'expo-sqlite';
import './global.js';
function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

export default function App() {
  const [date, changeDate] = useState(new Date());
  var dateString = date.toLocaleDateString();
  const [bool, setBool] = useState(false);
  const dateChanger = (event, selectedDate) => {
    changeDate(selectedDate);
  }

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE if not exists entries (date TEXT PRIMARY KEY NOT NULL, title TEXT, subject TEXT, rating INTEGER);"
      );
    });
  }, []);

  const add = (input, type) => {
    if (input === null || input === "") {
      return false;
    }
    var query = "INSERT INTO entries (date, " + type + ") values (?, ?)";
    var inputs = [dateString, input];
    db.transaction(
      (tx) => {
        tx.executeSql(query, inputs);

      }
    );
    alert("test");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}
    keyboardShouldPersistTaps='handled'
    >
      <StatusBar style="light" />
      <NavBar title = "THROWBACK" />

      <View style = {{width: "100%", alignItems: "center"}}>
        <View style={styles.textboxTitle}>
          <TextInput
            style = {{fontSize: 20}}
            placeholder={dateString}
            textAlign='center'
            textAlignVertical='center'
            editable = {!bool}
            onChangeText={newText => add(newText, "title")}
            
          ></TextInput>
        </View>
        <View style={styles.textboxNotes}>
          <TextInput
            placeholder="How's your day been?"
            style = {{fontSize: 15}}
            multiline
            numberOfLines={4}
            flex= {1}
            editable = {!bool}
          ></TextInput>
        </View>

        <SliderBar clickable = {bool}/>
      </View>

      {bool && (
        <View style = {{position: 'absolute', width: "100%", height:"100%", marginTop: 75, alignItems: "center"}}>
          <View style = {{position: 'absolute', width: "100%", height:"100%", backgroundColor:"gray"  }}></View>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            onChange={dateChanger}
            style = {{marginTop: 40, fontSize: '30px'}}
            themeVariant='dark'
          />
        </View>
      )}

      <Pressable style={{position: "absolute", left:10, top:25}} onPress= {() => setBool(!bool)}>
        <Text style={{color: '#ffffff', fontSize:30}}>[=]</Text>
      </Pressable>
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

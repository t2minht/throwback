import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function NavBar(props) {
    return (
        <View style={styles.container}>
            <Link href = "/details" style={{color: '#ffffff', fontSize:30, position: "absolute", left:10, top:25}}>[=]</Link>
            <Text style={{color: '#ffffff'}}>{props.title}</Text>
        </View>
    );
}


{/* <Pressable style={{position: "absolute", left:10, top:25}} onPress= {() => alert("Calendar")}>
  <Text style={{color: '#ffffff', fontSize:30}}>[=]</Text>
</Pressable> */}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      width: '100%',
      height: 75,
      paddingTop:20
    },
  });
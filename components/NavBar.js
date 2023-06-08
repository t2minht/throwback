import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function NavBar(props) {

    return (
        <View style={styles.container}>
            <Text style={{color: '#ffffff'}}>{props.title}</Text>
        </View>
    );
}

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
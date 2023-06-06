import { StyleSheet, Text, View } from 'react-native';

export default function NavBar() {
    return (
        <View style={styles.container}>
            <Text style={{color: '#ffffff'}}>Throwback</Text>
        </View>
    );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 75,
      paddingTop:20
    },
  });
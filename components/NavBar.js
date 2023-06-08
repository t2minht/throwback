import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function NavBar(props) {

  function toggle(){
    this.props.toggleFunction();
  }

    return (
        <View style={styles.container}>
            <Pressable style={{position: "absolute", left:10, top:25}} onPress= {toggle()}>
              <Text style={{color: '#ffffff', fontSize:30}}>[=]</Text>
            </Pressable>
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
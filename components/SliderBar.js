import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function SliderBar() {
    const x = 0; 

    return (
        <View style={[styles.container, {flexDirection: 'row'} ]}>
            <Pressable style={styles.leftbutton} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{0}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{1}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{2}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{3}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{4}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{5}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{6}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{7}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{8}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{9}</Text>
            </Pressable>
            <Pressable style={styles.rightbutton} onPress={() => alert(0)}>
                <Text style={styles.buttonLabel}>{10}</Text>
            </Pressable>
        </View>
    );
}

  const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width:'85%',
        borderColor: '#000000',
        borderWidth: '2px',
        borderRadius: 25
    },
    leftbutton:{
        flex: 1,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft:5,
    },
    button: {
        flex: 1,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    rightbutton:{
        flex: 1,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight:5,
    },
    buttonLabel: {
      color: '#000000',
      fontSize: 16,
    },
  });
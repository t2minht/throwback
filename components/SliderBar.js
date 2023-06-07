import { StyleSheet, Text, View, Pressable } from 'react-native';
import Button from './Button';

export default function SliderBar() {
    const x = 0; 

    return (
        <View style={[styles.container, {flexDirection: 'row'} ]}>
            <Button label = {0} style={styles.button}/>
            <Button label = {1} style={styles.button}/>
            <Button label = {2} style={styles.button}/>
            <Button label = {3} style={styles.button}/>
            <Button label = {4} style={styles.button}/>
            <Button label = {5} style={styles.button}/>
            <Button label = {6} style={styles.button}/>
            <Button label = {7} style={styles.button}/>
            <Button label = {8} style={styles.button}/>
            <Button label = {9} style={styles.button}/>
            <Button label = {10} style={styles.button}/>
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

    },
    button: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    rightbutton:{
        
    },
  });
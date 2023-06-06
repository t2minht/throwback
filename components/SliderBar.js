import { StyleSheet, Text, View, Pressable } from 'react-native';
import Button from './Button';

export default function SliderBar() {
    return (
        <View style={[styles.container, {flexDirection: 'row'} ]}>
            <Button label = "a"/>
            <Button label = "b"/>
            <Button label = "c"/>
        </View>
    );
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
  });
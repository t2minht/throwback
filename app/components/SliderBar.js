import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, {useState} from 'react';


export default function SliderBar() {
   
    const [x, setColor] = useState("0%");
    // const [color0, setColor0] = useState("#ffffff");
    // const [color1, setColor1] = useState("#ffffff");
    // const [color2, setColor2] = useState("#ffffff");
    // const [color3, setColor3] = useState("#ffffff");
    // const [color4, setColor4] = useState("#ffffff");
    // const [color5, setColor5] = useState("#ffffff");
    // const [color6, setColor6] = useState("#ffffff");
    // const [color7, setColor7] = useState("#ffffff");
    // const [color8, setColor8] = useState("#ffffff");
    // const [color9, setColor9] = useState("#ffffff");
    // const [color10, setColor10] = useState("#ffffff");

    function setCount(count){
        // switch(count){
        //     case 0:
        //         setColor1("#ffffff");
        //     case 1:
        //         setColor2("#ffffff");
        //     case 2:
        //         setColor3("#ffffff");
        //     case 3:
        //         setColor4("#ffffff");
        //     case 4:
        //         setColor5("#ffffff");
        //     case 5:
        //         setColor6("#ffffff");
        //     case 6:
        //         setColor7("#ffffff");
        //     case 7:
        //         setColor8("#ffffff");
        //     case 8:
        //         setColor9("#ffffff");
        //     case 9:
        //         setColor10("#ffffff");
        // }
        // switch(count){
        //     case 10:
        //         setColor10("#aaaaaa");
        //     case 9:
        //         setColor9("#aaaaaa");
        //     case 8:
        //         setColor8("#aaaaaa");
        //     case 7:
        //         setColor7("#aaaaaa");
        //     case 6:
        //         setColor6("#aaaaaa");
        //     case 5:
        //         setColor5("#aaaaaa");
        //     case 4:
        //         setColor4("#aaaaaa");
        //     case 3:
        //         setColor3("#aaaaaa");
        //     case 2:
        //         setColor2("#aaaaaa");
        //     case 1:
        //         setColor1("#aaaaaa");
        //     case 0:
        //         setColor0("#aaaaaa");
        // }
        // setCount((count + 1) / 11);
        
        setColor( "" + ( ((count + 1) / 11) * 100) + "%");
        if(count == 0)
            setColor("0%");
    }


    return (
        <View style={[styles.container, {flexDirection: 'row'} ]}>
            <View style={{backgroundColor:"green", position:'absolute', width: x, height:"100%", opacity: .2, borderRadius: "40"}}></View>
            <Pressable style={[styles.leftbutton, {}]} onPress={() => setCount(0)}>
                <Text style={styles.buttonLabel}>{0}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(1)}>
                <Text style={styles.buttonLabel}>{1}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(2)}>
                <Text style={styles.buttonLabel}>{2}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(3)}>
                <Text style={styles.buttonLabel}>{3}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(4)}>
                <Text style={styles.buttonLabel}>{4}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(5)}>
                <Text style={styles.buttonLabel}>{5}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(6)}>
                <Text style={styles.buttonLabel}>{6}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(7)}>
                <Text style={styles.buttonLabel}>{7}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(8)}>
                <Text style={styles.buttonLabel}>{8}</Text>
            </Pressable>
            <Pressable style={[styles.button, {}]} onPress={() => setCount(9)}>
                <Text style={styles.buttonLabel}>{9}</Text>
            </Pressable>
            <Pressable style={[styles.rightbutton, {}]} onPress={() => setCount(10)}>
                <Text style={styles.buttonLabel}>{10}</Text>
            </Pressable>
        </View>
    );
}

  const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width:'90%',
        borderColor: '#000000',
        borderWidth: '2px',
        borderRadius: 40,
    },
    leftbutton:{
        flex: 1,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    button: {
        flex: 1,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    rightbutton:{
        flex: 1,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    buttonLabel: {
      color: '#000000',
      fontSize: 16,
    },
  });
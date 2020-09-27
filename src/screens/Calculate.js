import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

import bg from '../assests/bg_image.png';
import InputBox from '../components/InputBox';
import Button from '../components/Button';

const Calculate = () => {

    const [result, setResult] = useState(0);
    const [value,setValue] = useState("");
   

    const handleTextChange = (text) => {
        setValue(text);
    }
    const handleAdd = () => {
        let res  = parseInt(result) + parseInt(value);
        setResult(res);
        setValue('');
       
    }
    return (
        <ImageBackground source={bg} style={styles.container}>

            <Text style={styles.text_two}>{result}</Text>

            <InputBox
                placeholder='0'
                keyboardType='numeric'
                value ={value}
                onChangeText={handleTextChange}
            />

            <Button
                text='Add'
                style={{ marginTop: 50 }}
                onPress={handleAdd} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    welcome_text: {
        fontSize: 30
    },
    logo_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 18,
        marginVertical: 20

    },
    text_one: {
        color: "#3A7909",
        fontSize: 18
    },
    text_two: {
        alignSelf: 'center',
        fontFamily: 'Lato',
        fontSize: 39,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 47,
        letterSpacing: 0,
        textAlign: 'center',
        marginVertical: 50

    }
});
export default Calculate;
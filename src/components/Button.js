import React from 'react';
import { TouchableOpacity,Text, View, StyleSheet } from 'react-native';

const Button = ({ text, onPress,style}) => {

    return (
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
            <Text style={styles.text}>
                {text}
            </Text>
               
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#3A7909',
       
        borderRadius: 8,
        padding: 14,
        marginHorizontal: 18,
        marginBottom: 20
    },
    text: {
        textAlign:'center',
        color:'#fff',
        fontSize:18
    }
})

export default Button;
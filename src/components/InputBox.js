import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const InputBox = ({ placeholder, keyboardType, secureTextEntry, onChangeText,value }) => {

    return (
        <View>
            <TextInput style={styles.text_input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    text_input: {
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 8,
        padding: 14,
        marginHorizontal: 18,
        marginBottom: 20
    }
})

export default InputBox;
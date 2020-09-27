import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ImageBackground } from 'react-native';
import logo from '../../assests/logo.png';
import bg from '../../assests/bg_image.png';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';

const Login = () => {

    return (
        <ImageBackground source={bg} style={styles.container}>
            <View style={styles.logo_view}>
                <Image source={logo} />
                <TouchableOpacity>
                    <Text style={styles.text_one}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text_two}>Sign In</Text>
            <InputBox 
             placeholder='Email'
                keyboardType='email-address'/>
            <InputBox 
                placeholder='Password'
                keyboardType='defalut'
                secureTextEntry={true}/>

            <Button 
                text='SIGN IN'
                style={{marginTop:50}}
                onPress={()=>{}}/>
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
        marginVertical:50

    }
});
export default Login;
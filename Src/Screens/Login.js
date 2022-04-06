import React, { useState ,useEffect} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import img from "../images/Sign.png"
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
const Login = ({ navigation }) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")

    
    const Login = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!email || !password) {
            showMessage({
                message: "Some Thing Went Wrong",
                description: "All Feild Required",
                type: "danger",
            })
        }
        else if (!regEx.test(email) && email !== "") {
            showMessage({
                message: "Some Thing Went Wrong",
                description: "Email is not Valid",
                type: "danger",
            })
        }
        else {
            let user = {
                Email: email,
                Password: password,
            }
            AsyncStorage.setItem('userEmail',email)
            AsyncStorage.setItem('userName',name)

            axios.post("https://form-back-end.herokuapp.com/login", user)
            .then(function (response) {
                    console.log(response)
                    console.log(response?.data)
                    showMessage({
                        message: "Login Succes",
                        type: "success",
                    })
                    console.log(response.data.msg);
                    setTimeout(() => {
                        setemail("");
                        setpassword("");
                        setname("")
                        navigation.navigate('MyTabs')
                    }, 1000)
                })
                .catch(function (error) {
                    if (error?.response?.data?.msg === "Email not found") {
                        showMessage({
                            message: "Some Thing Went Wrong",
                            description: "Email is Not Found",
                            type: "danger",
                        })
                    }
                    else if (error?.response?.data?.msg === "incorrect password") {
                        showMessage({
                            message: "Some Thing Went Wrong",
                            description: "Incorrect Password",
                            type: "danger",
                        })

                    }
                    else if (error?.response?.data?.msg === "server err") {
                        showMessage({
                            message: "Some Thing Went Wrong",
                            description: "Netwrok Error",
                            type: "danger",
                        })
                    }
                    console.log({ error });
                });
        }
    }
    return (
        <SafeAreaView >
            <StatusBar />
            <View style={styles.main_background}>
                <ImageBackground source={img} style={styles.img} />
                <View style={styles.background}>
                    <Text style={styles.sectionTitle}>
                        Login
                    </Text>
                    <View>
                    <View>
                            <TextInput value={name} style={styles.input} onChangeText={text => (setname(text))} placeholder='Your Name' />
                        </View>
                        <View>
                            <TextInput value={email} style={styles.input} onChangeText={text => (setemail(text))} placeholder='Place Your Gmail' />
                        </View>
                        <View>
                            <TextInput value={password} style={styles.input} onChangeText={text => (setpassword(text))} placeholder='Place Your Password' />
                        </View>
                    </View>
                </View>
                <View style={styles.Button_Veiw}>
                    <TouchableOpacity>
                        <Text style={styles.button} onPress={Login}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.VeiW}>
                    <TouchableOpacity>
                        <Text style={styles.text} onPress={() => { navigation.navigate('SetPassword') }} >Forget your  Password ?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    main_background: {
        backgroundColor: "black",
        height: 700
    },
    sectionTitle: {
        color: "black",
        marginTop: 50,
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
    },
    login: {
        color: "#D70F64",
        fontSize: 30,
        fontWeight: '400',
        marginLeft: 210,

    }, background: {
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 50
    },
    img: {
        height: 100,
        marginTop: 15,
        marginLeft: -4,
        marginBottom: -20
    },
    input: {
        fontSize: 17,
        height: 55,
        margin: 12,
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: "black",
        padding: 10,
        color: "black",
        borderRadius: 9,
    },
    input_VeiW: {
        marginTop: 10,
    },
    VeiW: {
        paddingTop: 30,
        backgroundColor: "white",
        height: 300
    },
     text: {
        marginLeft: 180,
        fontSize: 18,
        color: "#3b5998",
    },
    button: {
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        fontSize: 30,
        width: 200,
        alignContent: "center",
        borderRadius: 10,
    },
    Button_Veiw: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
});

export default Login;
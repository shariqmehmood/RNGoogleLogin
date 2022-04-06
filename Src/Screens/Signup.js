import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import img from "../images/Sign.png"
import axios from 'axios';
const Signup = ({ navigation }) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const [Number, setnumber] = useState("")
    const submit = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!name || !email || !password || !Number) {
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
                Name: name,
                Email: email,
                Password: password,
                Number: Number,
            }
            
            axios.post("https://form-back-end.herokuapp.com/Signup", user)
                .then((res) => {
                    console.log(res.data.msg, 'response');

                    if (res.data.msg === "email is alredy in Use") {
                        showMessage({
                            message: "Some Thing Went Wrong",
                            description: "Email is used in another account",
                            type: "danger",
                        })
                    }
                    else {
                        showMessage({
                            message: "user Created Succes",
                            type: "success",
                        })
                        setTimeout(() => {
                            setemail(""),
                                setpassword(""),
                                setname(""),
                                setnumber(""),
                                navigation.navigate('Login')
                        }, 1000)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    showMessage({
                        message: "Network Error",
                        type: "danger",
                    })
                });
        }
    }
    return (
        <SafeAreaView >
            <StatusBar />
            <ScrollView>
                <View style={{ backgroundColor: "black" }}>
                    <ImageBackground source={img} style={styles.img}></ImageBackground>
                    <View style={styles.background}>
                        <Text style={styles.sectionTitle}>
                            Signup
                        </Text>
                        <View>
                            <View style={styles.input_VeiW}>
                                <TextInput style={styles.input} value={name} onChangeText={text => (setname(text))} placeholder='Place Your Name' />
                            </View>
                            <View>
                                <TextInput style={styles.input} value={email} onChangeText={text => (setemail(text))} placeholder='Place Your Gmail' />
                            </View>
                            <View>
                                <TextInput style={styles.input} value={password} onChangeText={text => (setpassword(text))} keyboardType="visible-password" placeholder='Place Your Password' />
                            </View>
                            <View>
                                <TextInput style={styles.input} value={Number} onChangeText={text => (setnumber(text))} keyboardType="number-pad" placeholder='Eg :03440324499' />
                            </View>
                        </View>
                    </View>
                    <View style={styles.Button_Veiw}>
                        <TouchableOpacity>
                            <Text style={styles.button} onPress={submit}>Signup</Text>
                        </TouchableOpacity>
                        <Text style={styles.Text} onPress={() => { navigation.navigate('Login') }} >You Have an Account ?
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    Text: {
        marginLeft: 180,
        fontSize: 18,
        color: "#3b5998",
        marginTop: 20,
        marginBottom: 105,
    },
    img: {
        height: 100,
        marginTop: 10,
        marginLeft: -4
    },
    sectionTitle: {
        color: "black",
        marginTop: 10,
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
    },
    login: {
        color: "white",
        fontSize: 30,
        fontWeight: '400',
        marginLeft: 210,
    },
    input: {
        fontSize: 17,
        height: 55,
        margin: 12,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        color: "black",
        borderRadius: 9,
        color: "black"
    },
    input_VeiW: {
        marginTop: 2,
    },
    VeiW: {
        marginTop: 30,
        textAlign: "center",
    }, text: {
        marginLeft: 50,
        marginTop: 20
    },
    button: {
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        fontSize: 30,
        marginTop: 5,
        marginBottom: 20,
        width: 200,
        alignContent: "center",
        borderRadius: 10,
    },
    Button_Veiw: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    }
});

export default Signup;
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
const ForgetPassword = ({ navigation }) => {
    const [email, setemail] = useState("")
    const Submit = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (email === "") {
            showMessage({
                message: "Some Thing Went Wrong",
                description: "All Feild Required",
                type: "danger",
            })
        }
        else if (!regEx.test(email) && email !== "") {
            showMessage({
                message: "Some Thing Went Wrong",
                description: "email is not valid",
                type: "danger",
            })
        }
        else {
            setemail("")
            seterrcolor("green")
            setErrMsg("wait");
            setTimeout(() => {
                seterrcolor("white")
                setErrMsg('o');
            }, 2000)
            let data = {
                email,
            }
            console.log(data)
        }
    }
    return (
        <SafeAreaView >
            <StatusBar />
            <View style={styles.Main_background}>
                <ImageBackground source={img} style={styles.img} />
                <View style={styles.background}>
                    <Text style={styles.sectionTitle}>
                        SetPassword
                    </Text>
                    <View>
                        <View>
                            <TextInput style={styles.input} value={email} onChangeText={text => (setemail(text))} placeholder='Place Your Gmail' />
                        </View>
                    </View>
                    <View style={styles.Button_Veiw}>
                        <TouchableOpacity>
                            <Text style={styles.button} onPress={Submit}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    Main_background: {
        backgroundColor: "black",
    },
    sectionTitle: {
        color: "black",
        marginTop: 50,
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
        marginBottom: 50,
    },
    img: {
        height: 100,
        marginLeft: -4,
        marginTop: 10,
        marginBottom: -20
    },
    input: {
        fontSize: 17,
        height: 55,
        margin: 12,
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        color: "black",
        borderRadius: 9,
        backgroundColor: "white"
    },
    input_VeiW: {
        marginTop: 60,
    },
    text: {
        marginLeft: 180,
        fontSize: 18,
        color: "#3b5998"
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
        marginTop: 50
    },
    background: {
        backgroundColor: "white",
        marginTop: 60,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    }
});

export default ForgetPassword;
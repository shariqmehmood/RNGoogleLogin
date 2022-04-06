import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";

export default function AddOrder({ navigation }) {
    const [name, setname] = useState("")
    const [discription, setdiscription] = useState("")
    const [title, settitle] = useState("")
    const [price, setprice] = useState("")


    const Submit = () => {
        if (!name || !discription || !title ||!price) {
            showMessage({
                message: "Some Thing Went Wrong",
                description: "All Feild Required",
                type: "danger",
            })
        }


        else {
            let userData = {
                yourname: name,
                jobtitle: title,
                Price: price,
                discription: discription,
                // experience: 
            }
            axios.post('https://reactnativesignuplogin.herokuapp.com/student', userData)
                .then((s) => {
                    console.log(s, 'succsess')
                    showMessage({
                        message: 'Your Job Added Successfully',
                        type: 'success',
                        duration: 3000,
                    });

                    setTimeout(() => {
                        setname("")
                        settitle("")
                        setdiscription("")
                        setprice("")
                        navigation.navigate("All-Jobs")
                    }, 3000)


                }).catch((e) => {
                    console.log({ e }, 'error')
                })
        }
    }
    return (
        <View style={{ backgroundColor: "white" }}>
            <Text style={styles.sectionTitle}>Add Work</Text>
            <ScrollView>
                <TextInput style={styles.input} value={name} onChangeText={text => (setname(text))} placeholder="YourName" />
                <TextInput style={styles.input} value={title} onChangeText={text => (settitle(text))} placeholder="Job-Title" />
                <TextInput style={styles.input}   keyboardType = 'numeric' value={price} onChangeText={text => (setprice(text))} placeholder="Price" />
                <TextInput style={styles.inputd} multiline={true} numberOfLines={4} value={discription} onChangeText={text => (setdiscription(text))} placeholder="discription" />
                <View style={styles.Button_Veiw}>
                    <TouchableOpacity>
                        <Text style={styles.button} onPress={Submit} >Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    sectionTitle: {
        color: "black",
        textAlign: "center",
        fontSize: 50,
        fontWeight: '600',
        marginBottom: 20
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
    inputd: {
        fontSize: 17,
        height: 120,
        margin: 12,
        paddingBottom: 70,
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: "black",
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


    }, text: {
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
        height: 150,
        backgroundColor: "white",
        marginBottom: 50,
    },






    imgStyle: {
        height: 200,
        width: 200,
    },
    img: {
        height: 200,
        width: 200,
        marginLeft: 70,
    },


});
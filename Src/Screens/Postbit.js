import React from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
export default function PostBit() {
    return (
        <ScrollView>

            <View style={styles.background}>
                <Text style={styles.Heading}>Enter your Detail</Text>
                <View style={styles.inputDiv}>

                    <TextInput style={styles.input} placeholder="Your Name" />
                    <TextInput style={styles.input} placeholder="Your Email" />
                    <TextInput style={styles.input} placeholder="Your Budget" />
                    <TextInput style={styles.input} placeholder="discription" />

                </View>
                                   <View style={styles.buttonDiv}>
                                       <Text style={styles.btn}>Send</Text>
                                   </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: "black",
        height: 719
    },
    inputDiv: {
        marginTop: 50
    },
    input: {
        fontSize: 20,
        height: 60,
        margin: 12,
        marginTop: 10,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        color: "black",
        borderRadius: 9,
        color: "black"
    },
    Heading: {
        color: "white",
        marginTop: 50,
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold"
    },
    buttonDiv:{
     backgroundColor:"white",
     width:200,
     alignSelf:"center",
     marginTop:20
    },
    btn:{
        color:"black",
        fontSize:30,
        borderWidth: 2,
        textAlign:"center",
        fontWeight:"bold"
    }
})
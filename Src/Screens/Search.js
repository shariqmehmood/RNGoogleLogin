import React, { useState, useEffect } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput
} from 'react-native';

function Search({navigation}) {
    return (
        <View style={styles.inputd}>
            <TextInput placeholder='Search' style={styles.input} />
            <Text style={styles.btn}>Search Jobs</Text>
        </View>
    )
}
export default Search;
const styles = StyleSheet.create({
    inputd: {
        margin: 12,
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: "black",
        color: "black",
        borderRadius: 9,
        height: 60

    }
    , btn: {
        color: "white",
        backgroundColor: "black",
        height: 48,
        width: 100,
        textAlign: "center",
        paddingTop: 10,
        fontSize: 19,
        marginLeft: 260,
        marginTop: -45,
        paddingTop:-10,
        borderRadius:5,
    }
    ,
    input: {
        fontSize: 17,
        color: "black",
        borderRadius: 9,
        height: 60,
        width: 250,
        height: 48
    }
})
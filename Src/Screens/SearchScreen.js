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

function SearchResult() {
    return (
        <View >
            <Text style={styles.btn}>Result</Text>
        </View>
    )
}
export default SearchResult;
const styles = StyleSheet.create({
    
 btn:{
     color:"black",
     fontSize:35,
     fontWeight:"bold",
     textAlign:"center",
     marginTop:20,
 }
})